document.addEventListener('DOMContentLoaded', () => {
    // --- 1. CONTROLE DE ACESSO E INFORMAÇÕES DO USUÁRIO ---
    const usuarioLogado = sessionStorage.getItem('usuarioLogado');
    const perfilUsuario = sessionStorage.getItem('perfilUsuario');

    // Se não houver usuário logado, redireciona para a página de login
    if (!usuarioLogado) {
        window.location.href = 'login.html';
        return; // Interrompe a execução do script se não houver login
    }

    // Mostra a mensagem de boas-vindas e o botão de sair
    document.getElementById('welcome-user').textContent = `Bem-vindo(a), ${usuarioLogado}!`;
    document.getElementById('logout-btn').addEventListener('click', () => {
        sessionStorage.clear();
        window.location.href = 'login.html';
    });

    // Função que controla o que cada perfil pode ver e acessar
    function controlarAcesso() {
        const todosElementosComPerfil = document.querySelectorAll('[data-perfil]');
        
        todosElementosComPerfil.forEach(el => {
            const perfisPermitidos = el.dataset.perfil.split(',');
            if (!perfisPermitidos.includes(perfilUsuario)) {
                el.style.display = 'none';
            }
        });

        // Garante que a primeira aba visível para o usuário seja a ativa
        const primeiraAbaVisivel = document.querySelector('.nav-link:not([style*="display: none"])');
        if (primeiraAbaVisivel) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            primeiraAbaVisivel.classList.add('active');
            showSection(primeiraAbaVisivel.getAttribute('href').substring(1));
        }
    }


    // --- 2. STATE MANAGEMENT & LOCALSTORAGE ---
    const mockData = {
        fornecedores: [ { id: 1, nome: 'Fornecedor Exemplo', tipo: 'Fornecedor', documento: null } ],
        registros: [
            { id: 1, data: '2025-07-01', produto: 'Dipirona', lote: 'LOTE001', validade: '2027-01-01', fornecedor: 'Fornecedor Exemplo', responsavel: 'otavio', status: 'Conforme', observacoes: 'Tudo OK.'}
        ],
        pops: [
            { id: 1, titulo: 'POP-001: Higienização das Mãos', setor: 'Qualidade', versao: 1, objetivo: 'Garantir a correta assepsia.', conteudo: 'Procedimento detalhado aqui.', historico: [{ versao: 1, data: new Date().toLocaleDateString('pt-BR'), descricao: 'Versão inicial criada.', responsavel: 'danieli' }] }
        ],
        proximoIdFornecedor: 2, proximoIdRegistro: 2, proximoIdPop: 2,
    };

    let fornecedores = JSON.parse(localStorage.getItem('fornecedoresQualidade')) || mockData.fornecedores;
    let registros = JSON.parse(localStorage.getItem('registrosQualidade')) || mockData.registros;
    let pops = JSON.parse(localStorage.getItem('popsQualidade')) || mockData.pops;
    let proximoIdFornecedor = parseInt(localStorage.getItem('proximoIdFornecedorQualidade')) || mockData.proximoIdFornecedor;
    let proximoIdRegistro = parseInt(localStorage.getItem('proximoIdRegistroQualidade')) || mockData.proximoIdRegistro;
    let proximoIdPop = parseInt(localStorage.getItem('proximoIdPopQualidade')) || mockData.proximoIdPop;

    function salvarDadosNoStorage() {
        localStorage.setItem('fornecedoresQualidade', JSON.stringify(fornecedores));
        localStorage.setItem('registrosQualidade', JSON.stringify(registros));
        localStorage.setItem('popsQualidade', JSON.stringify(pops));
        localStorage.setItem('proximoIdFornecedorQualidade', proximoIdFornecedor.toString());
        localStorage.setItem('proximoIdRegistroQualidade', proximoIdRegistro.toString());
        localStorage.setItem('proximoIdPopQualidade', proximoIdPop.toString());
    }

    // --- 3. DOM ELEMENTS ---
    const mainNavLinks = document.querySelectorAll('#main-nav a');
    const mainSections = document.querySelectorAll('main > .card');
    const messageArea = document.getElementById('message-area-notifications');
    // Inspeções
    const resumoDiv = document.getElementById('resumo');
    const tabelaRegistrosBody = document.querySelector('#tabela-registros tbody');
    const registroForm = document.getElementById('registroForm');
    const gotoAddInspectionBtn = document.getElementById('goto-add-inspection-btn');
    const dropdownFornecedores = document.getElementById('fornecedor');
    // Fornecedores
    const fornecedorForm = document.getElementById('fornecedorForm');
    const tabelaFornecedoresBody = document.querySelector('#tabela-fornecedores tbody');
    // POPs
    const popForm = document.getElementById('popForm');
    const tabelaPopsBody = document.querySelector('#tabela-pops tbody');
    const popModal = document.getElementById('popModal');
    const historicoPopModal = document.getElementById('historicoPopModal');
    const cancelarEdicaoPopBtn = document.getElementById('cancelarEdicaoPop');
    // Relatórios
    const filtroResponsavelSelect = document.getElementById('filtro-responsavel');
    const relatorioConteudoDiv = document.getElementById('relatorio-conteudo');


    // --- 4. FUNÇÕES GERAIS E DE NAVEGAÇÃO ---
    function displayMessage(message, type, duration = 4000) {
        messageArea.textContent = message;
        messageArea.className = `message ${type}`;
        messageArea.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => { messageArea.style.display = 'none'; }, duration);
    }

    function showSection(sectionId) {
        mainSections.forEach(section => {
            section.style.display = 'none';
        });
        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.style.display = 'block';
        }
    }

    mainNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            showSection(sectionId);
            mainNavLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    gotoAddInspectionBtn.addEventListener('click', () => {
        // Preenche o campo de responsável com o usuário logado e o torna somente leitura
        const responsavelInput = document.getElementById('responsavel');
        responsavelInput.value = usuarioLogado;
        responsavelInput.readOnly = true;
        
        showSection('formulario-card');
        mainNavLinks.forEach(l => l.classList.remove('active')); // Opcional: remove o 'active' de outras abas
    });

    document.getElementById('currentYear').textContent = new Date().getFullYear();

    
    // --- 5. GESTÃO DE INSPEÇÕES ---
    function renderRegistros() {
         resumoDiv.innerHTML = `<p>Total de Inspeções: ${registros.length}</p>`;
         tabelaRegistrosBody.innerHTML = '';
         registros.forEach(r => {
             const row = tabelaRegistrosBody.insertRow();
             row.innerHTML = `<td>${r.id}</td><td>${r.data}</td><td>${r.produto}</td><td>${r.lote}</td><td>${r.validade}</td><td>${r.fornecedor}</td><td>${r.responsavel}</td><td>${r.status}</td><td>-</td>`;
         });
    }

    registroForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const novoRegistro = {
            id: proximoIdRegistro++,
            data: document.getElementById('data').value,
            produto: document.getElementById('produto').value,
            lote: document.getElementById('lote').value,
            validade: document.getElementById('validade').value,
            fornecedor: document.getElementById('fornecedor').value,
            responsavel: document.getElementById('responsavel').value, // Já preenchido
            status: document.getElementById('status').value,
            observacoes: document.getElementById('observacoes').value
        };
        registros.push(novoRegistro);
        salvarDadosNoStorage();
        renderRegistros();
        showSection('resumo-card');
        displayMessage('Inspeção salva com sucesso!', 'success');
    });


    // --- 6. GESTÃO DE FORNECEDORES ---
    function renderFornecedores() {
        tabelaFornecedoresBody.innerHTML = '';
        fornecedores.forEach(f => {
            const docHTML = f.documento ? `<a href="#" onclick="alert('Simulação de visualização: ${f.documento}')">${f.documento}</a>` : 'Nenhum';
            const row = tabelaFornecedoresBody.insertRow();
            row.innerHTML = `<td>${f.id}</td><td>${f.nome}</td><td>${f.tipo}</td><td>${docHTML}</td><td><button class="action-button remove-fornecedor-btn" data-id="${f.id}">Remover</button></td>`;
        });
    }

    function popularDropdownFornecedores() {
        dropdownFornecedores.innerHTML = '<option value="">-- Selecione --</option>';
        fornecedores.forEach(f => dropdownFornecedores.innerHTML += `<option value="${f.nome}">${f.nome}</option>`);
    }

    fornecedorForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('fornecedorNome').value;
        const tipo = document.getElementById('fornecedorTipo').value;
        const arquivo = document.getElementById('fornecedorDoc').files[0];
        fornecedores.push({ id: proximoIdFornecedor++, nome: nome.trim(), tipo: tipo, documento: arquivo ? arquivo.name : null });
        salvarDadosNoStorage();
        renderFornecedores();
        popularDropdownFornecedores();
        fornecedorForm.reset();
        displayMessage('Fornecedor salvo!', 'success');
    });

    tabelaFornecedoresBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-fornecedor-btn')) {
            const id = parseInt(e.target.dataset.id);
            if (confirm('Deseja remover este fornecedor?')) {
                fornecedores = fornecedores.filter(f => f.id !== id);
                salvarDadosNoStorage();
                renderFornecedores();
                popularDropdownFornecedores();
            }
        }
    });

    
    // --- 7. GESTÃO DE POPs ---
    function renderPops() {
        tabelaPopsBody.innerHTML = '';
        pops.forEach(p => {
            const ultimaAlteracao = p.historico[0]; // O histórico está em ordem decrescente
            const row = tabelaPopsBody.insertRow();
            row.innerHTML = `
                <td>${p.id}</td><td>${p.titulo}</td><td>${p.setor}</td><td>${p.versao}</td>
                <td>${ultimaAlteracao.responsavel}</td>
                <td>
                    <button class="action-button view-pop-btn" data-id="${p.id}">Ver</button>
                    <button class="action-button edit-pop-btn" data-id="${p.id}">Editar</button>
                    <button class="action-button hist-pop-btn" data-id="${p.id}">Histórico</button>
                </td>`;
        });
    }

    function resetPopForm() {
        popForm.reset();
        document.getElementById('popId').value = '';
        document.getElementById('popAlteracao-group').style.display = 'none';
        cancelarEdicaoPopBtn.style.display = 'none';
    }

    popForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = document.getElementById('popId').value;
        const titulo = document.getElementById('popTitulo').value;
        const setor = document.getElementById('popSetor').value;
        const objetivo = document.getElementById('popObjetivo').value;
        const conteudo = document.getElementById('popConteudo').value;
        const alteracaoDesc = document.getElementById('popAlteracao').value;

        if (id) { // Editando POP existente
            if (!alteracaoDesc) {
                displayMessage('A descrição da alteração é obrigatória para editar um POP.', 'error');
                return;
            }
            const index = pops.findIndex(p => p.id == id);
            if (index > -1) {
                const pop = pops[index];
                pop.titulo = titulo;
                pop.setor = setor;
                pop.objetivo = objetivo;
                pop.conteudo = conteudo;
                pop.versao += 1;
                pop.historico.unshift({ versao: pop.versao, data: new Date().toLocaleDateString('pt-BR'), descricao: alteracaoDesc, responsavel: usuarioLogado });
            }
        } else { // Criando novo POP
            const novoPop = {
                id: proximoIdPop++,
                titulo, setor, objetivo, conteudo, versao: 1,
                historico: [{ versao: 1, data: new Date().toLocaleDateString('pt-BR'), descricao: 'Versão inicial criada.', responsavel: usuarioLogado }]
            };
            pops.push(novoPop);
        }
        salvarDadosNoStorage();
        renderPops();
        resetPopForm();
        displayMessage('POP salvo com sucesso!', 'success');
    });

    tabelaPopsBody.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (!id) return;
        const pop = pops.find(p => p.id == id);
        if (!pop) return;

        if (e.target.classList.contains('edit-pop-btn')) {
            document.getElementById('popId').value = pop.id;
            document.getElementById('popTitulo').value = pop.titulo;
            document.getElementById('popSetor').value = pop.setor;
            document.getElementById('popObjetivo').value = pop.objetivo;
            document.getElementById('popConteudo').value = pop.conteudo;
            document.getElementById('popAlteracao-group').style.display = 'block';
            cancelarEdicaoPopBtn.style.display = 'inline-block';
            popForm.scrollIntoView({ behavior: 'smooth' });
        }
        if (e.target.classList.contains('view-pop-btn')) {
            document.getElementById('popModalTitulo').textContent = pop.titulo;
            document.getElementById('popModalSetor').textContent = pop.setor;
            document.getElementById('popModalVersao').textContent = pop.versao;
            document.getElementById('popModalObjetivo').textContent = pop.objetivo;
            document.getElementById('popModalConteudo').innerHTML = pop.conteudo.replace(/\n/g, '<br>');
            popModal.style.display = 'block';
        }
        if (e.target.classList.contains('hist-pop-btn')) {
            document.getElementById('historicoPopModalTitulo').textContent = `Histórico: ${pop.titulo}`;
            const lista = document.getElementById('historicoPopModalLista');
            lista.innerHTML = '';
            pop.historico.forEach(h => {
                lista.innerHTML += `<li><strong>Versão ${h.versao} (${h.data}) por ${h.responsavel}:</strong> ${h.descricao}</li>`;
            });
            historicoPopModal.style.display = 'block';
        }
    });

    cancelarEdicaoPopBtn.addEventListener('click', resetPopForm);
    
    // Fechar Modais
    popModal.querySelector('.close-button').addEventListener('click', () => popModal.style.display = 'none');
    historicoPopModal.querySelector('.close-button').addEventListener('click', () => historicoPopModal.style.display = 'none');
    window.addEventListener('click', (event) => {
        if (event.target == popModal) popModal.style.display = 'none';
        if (event.target == historicoPopModal) historicoPopModal.style.display = 'none';
    });


    // --- 8. RELATÓRIO POR RESPONSÁVEL ---
    function popularFiltroResponsaveis() {
        const responsaveis = new Set();
        registros.forEach(r => responsaveis.add(r.responsavel));
        pops.forEach(p => p.historico.forEach(h => responsaveis.add(h.responsavel)));
        
        filtroResponsavelSelect.innerHTML = '<option value="">-- Todos --</option>';
        responsaveis.forEach(r => {
            if(r) filtroResponsavelSelect.innerHTML += `<option value="${r}">${r}</option>`;
        });
    }

    function gerarRelatorioPorResponsavel(responsavel) {
        if (!responsavel) {
            relatorioConteudoDiv.innerHTML = '<p>Selecione um responsável para ver suas atividades.</p>';
            return;
        }

        const inspecoesDoResponsavel = registros.filter(r => r.responsavel === responsavel);
        const popsDoResponsavel = pops.filter(p => p.historico.some(h => h.responsavel === responsavel));

        let html = `<h3>Atividades de: ${responsavel}</h3>`;

        html += '<h4>Inspeções Realizadas</h4>';
        if (inspecoesDoResponsavel.length > 0) {
            html += '<ul>';
            inspecoesDoResponsavel.forEach(r => {
                html += `<li><b>${r.data}</b> - Produto: ${r.produto} (Lote: ${r.lote}) - Status: ${r.status}</li>`;
            });
            html += '</ul>';
        } else {
            html += '<p>Nenhuma inspeção encontrada.</p>';
        }

        html += '<h4 style="margin-top: 20px;">POPs Criados/Editados</h4>';
         if (popsDoResponsavel.length > 0) {
            html += '<ul>';
            popsDoResponsavel.forEach(p => {
                 const alteracoes = p.historico.filter(h => h.responsavel === responsavel);
                 alteracoes.forEach(a => {
                     html += `<li><b>${a.data}</b> - POP: "${p.titulo}" (Versão ${a.versao}) - Alteração: ${a.descricao}</li>`;
                 });
            });
            html += '</ul>';
        } else {
            html += '<p>Nenhuma atividade em POPs encontrada.</p>';
        }
        
        relatorioConteudoDiv.innerHTML = html;
    }

    filtroResponsavelSelect.addEventListener('change', () => {
        gerarRelatorioPorResponsavel(filtroResponsavelSelect.value);
    });

    
    // --- 9. INICIALIZAÇÃO DO SISTEMA ---
    function init() {
        controlarAcesso();
        renderFornecedores();
        popularDropdownFornecedores();
        renderRegistros();
        renderPops();
        popularFiltroResponsaveis();
    }

    init(); // Roda todas as funções de inicialização
});