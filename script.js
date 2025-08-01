document.addEventListener('DOMContentLoaded', () => {
    const usuarioLogado = sessionStorage.getItem('usuarioLogado');
    const perfilUsuario = sessionStorage.getItem('perfilUsuario');

    if (!usuarioLogado) {
        window.location.href = 'login.html';
        return;
    }

    // --- VARIÁVEIS GLOBAIS E ELEMENTOS DO DOM ---
    const mainNavLinks = document.querySelectorAll('#main-nav a');
    const mainSections = document.querySelectorAll('main > .card');
    const messageArea = document.getElementById('message-area-notifications');
    document.getElementById('welcome-user').textContent = `Bem-vindo(a), ${usuarioLogado}!`;
    document.getElementById('logout-btn').addEventListener('click', () => {
        sessionStorage.clear();
        window.location.href = 'login.html';
    });
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // --- DADOS DO APLICATIVO ---
    let produtosDoEstoque = JSON.parse(localStorage.getItem('produtosDoEstoqueQualidade')) || (typeof produtosIniciais !== 'undefined' ? produtosIniciais : []);
    let fornecedores = JSON.parse(localStorage.getItem('fornecedoresQualidade')) || (typeof mockData !== 'undefined' ? mockData.fornecedores : []);
    let registros = JSON.parse(localStorage.getItem('registrosQualidade')) || (typeof mockData !== 'undefined' ? mockData.registros : []);
    let pops = JSON.parse(localStorage.getItem('popsQualidade')) || (typeof mockData !== 'undefined' ? mockData.pops : []);
    let trelloCards = JSON.parse(localStorage.getItem('trelloCardsQualidade')) || [];
    let proximoIdFornecedor = parseInt(localStorage.getItem('proximoIdFornecedorQualidade')) || (fornecedores.length > 0 ? Math.max(...fornecedores.map(f => f.id)) + 1 : 1);
    let proximoIdRegistro = parseInt(localStorage.getItem('proximoIdRegistroQualidade')) || (registros.length > 0 ? Math.max(...registros.map(r => r.id)) + 1 : 1);
    let proximoIdPop = parseInt(localStorage.getItem('proximoIdPopQualidade')) || (pops.length > 0 ? Math.max(...pops.map(p => p.id)) + 1 : 1);

    // --- FUNÇÕES UTILITÁRIAS ---
    function salvarDadosNoStorage() {
        localStorage.setItem('fornecedoresQualidade', JSON.stringify(fornecedores));
        localStorage.setItem('registrosQualidade', JSON.stringify(registros));
        localStorage.setItem('popsQualidade', JSON.stringify(pops));
        localStorage.setItem('trelloCardsQualidade', JSON.stringify(trelloCards));
        localStorage.setItem('produtosDoEstoqueQualidade', JSON.stringify(produtosDoEstoque));
        localStorage.setItem('proximoIdFornecedorQualidade', proximoIdFornecedor.toString());
        localStorage.setItem('proximoIdRegistroQualidade', proximoIdRegistro.toString());
        localStorage.setItem('proximoIdPopQualidade', proximoIdPop.toString());
    }

    function setFocusMode(active) { document.body.classList.toggle('focus-mode', active); }

    function displayMessage(message, type, duration = 4000) {
        messageArea.textContent = message;
        messageArea.className = `message ${type}`;
        messageArea.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => { messageArea.style.display = 'none'; }, duration);
    }

    // --- CONTROLE DE NAVEGAÇÃO E ACESSO ---
    function showSection(sectionId) {
        mainSections.forEach(section => section.style.display = 'none');
        const activeSection = document.getElementById(sectionId);
        if (activeSection) activeSection.style.display = 'block';
    }

    mainNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            showSection(sectionId);
            mainNavLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            // Remove focus mode when navigating between main sections
            setFocusMode(false); 
        });
    });

    function controlarAcessoInicial() {
        document.querySelectorAll('[data-perfil]').forEach(el => {
            const perfisPermitidos = el.dataset.perfil.split(',');
            if (!perfisPermitidos.includes(perfilUsuario)) {
                el.style.display = 'none';
            }
        });
        const primeiraAbaVisivel = document.querySelector('.nav-link:not([style*="display: none"])');
        if (primeiraAbaVisivel) {
            primeiraAbaVisivel.click();
        }
    }
    
    // =================================================================
    // --- LÓGICA DE INSPEÇÕES (COM BUSCA, EDITAR E EXCLUIR) ---
    // =================================================================
    const resumoDiv = document.getElementById('resumo');
    const tabelaRegistrosBody = document.querySelector('#tabela-registros tbody');
    const registroForm = document.getElementById('registroForm');
    const gotoAddInspectionBtn = document.getElementById('goto-add-inspection-btn');
    const cancelInspectionBtn = document.getElementById('cancel-inspection-btn');
    const formInspecaoTitulo = document.getElementById('form-inspecao-titulo');
    const filtroTabela = document.getElementById('filtro-tabela');
    
    function renderRegistros(filtro = '') {
        if(resumoDiv) resumoDiv.innerHTML = `<p>Total de Inspeções: ${registros.length}</p>`;
        if (tabelaRegistrosBody) {
            tabelaRegistrosBody.innerHTML = '';
            const registrosFiltrados = registros.filter(r => JSON.stringify(r).toLowerCase().includes(filtro));
            
            registrosFiltrados.forEach(r => {
                const row = tabelaRegistrosBody.insertRow();
                const acoesHtml = perfilUsuario === 'admin' 
                    ? `<td><button class="action-button edit-inspecao-btn" data-id="${r.id}">Editar</button> <button class="action-button cancel remove-inspecao-btn" data-id="${r.id}">Excluir</button></td>`
                    : '';
                row.innerHTML = `<td>${r.id}</td><td>${r.data}</td><td>${r.produto}</td><td>${r.lote}</td><td>${r.validade}</td><td>${r.fornecedor}</td><td>${r.responsavel}</td><td>${r.status}</td>${acoesHtml}`;
            });
        }
    }

    if (filtroTabela) {
        filtroTabela.addEventListener('input', () => renderRegistros(filtroTabela.value.toLowerCase()));
    }

    if (gotoAddInspectionBtn) {
        gotoAddInspectionBtn.addEventListener('click', () => {
            registroForm.reset();
            formInspecaoTitulo.textContent = "Novo Registro de Inspeção";
            document.getElementById('inspecaoId').value = '';
            document.getElementById('responsavel').value = usuarioLogado;
            setFocusMode(true);
            showSection('formulario-card');
            document.getElementById('formulario-card').scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (cancelInspectionBtn) {
        cancelInspectionBtn.addEventListener('click', () => {
            setFocusMode(false);
            showSection('resumo-card');
        });
    }

    if (registroForm) {
        registroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const id = document.getElementById('inspecaoId').value;
            const data = {
                data: document.getElementById('data').value,
                produto: document.getElementById('produto').value,
                lote: document.getElementById('lote').value,
                validade: document.getElementById('validade').value,
                fornecedor: document.getElementById('fornecedor').value,
                responsavel: document.getElementById('responsavel').value,
                status: document.getElementById('status').value,
                observacoes: document.getElementById('observacoes').value
            };
            if (id) {
                const index = registros.findIndex(r => r.id == id);
                registros[index] = { ...registros[index], ...data };
                displayMessage('Inspeção atualizada com sucesso!', 'success');
            } else {
                data.id = proximoIdRegistro++;
                registros.push(data);
                displayMessage('Nova inspeção registrada com sucesso!', 'success');
            }
            salvarDadosNoStorage();
            renderRegistros();
            registroForm.reset();
            setFocusMode(false);
            showSection('resumo-card');
        });
    }

    if(tabelaRegistrosBody) {
        tabelaRegistrosBody.addEventListener('click', e => {
            const id = e.target.dataset.id;
            if (e.target.classList.contains('remove-inspecao-btn')) {
                if (confirm('Tem certeza que deseja excluir esta inspeção?')) {
                    registros = registros.filter(r => r.id != id);
                    salvarDadosNoStorage();
                    renderRegistros();
                    displayMessage('Inspeção excluída com sucesso!', 'success');
                }
            }
            if (e.target.classList.contains('edit-inspecao-btn')) {
                const inspecao = registros.find(r => r.id == id);
                formInspecaoTitulo.textContent = `Editando Inspeção #${id}`;
                document.getElementById('inspecaoId').value = inspecao.id;
                document.getElementById('data').value = inspecao.data;
                document.getElementById('produto').value = inspecao.produto;
                document.getElementById('lote').value = inspecao.lote;
                document.getElementById('validade').value = inspecao.validade;
                document.getElementById('fornecedor').value = inspecao.fornecedor;
                document.getElementById('responsavel').value = inspecao.responsavel;
                document.getElementById('status').value = inspecao.status;
                document.getElementById('observacoes').value = inspecao.observacoes;
                setFocusMode(true);
                showSection('formulario-card');
                document.getElementById('formulario-card').scrollIntoView({ behavior: 'smooth' }); // Adicionado para rolar até o formulário
            }
        });
    }

    // =================================================================
    // --- LÓGICA DE FORNECEDORES (COM EDITAR E EXCLUIR) ---
    // =================================================================
    const fornecedorForm = document.getElementById('fornecedorForm');
    const tabelaFornecedoresBody = document.querySelector('#tabela-fornecedores tbody');
    const formFornecedorTitulo = document.getElementById('form-fornecedor-titulo');
    const cancelarEdicaoFornecedorBtn = document.getElementById('cancelarEdicaoFornecedor');
    const gotoAddFornecedorBtn = document.getElementById('goto-add-fornecedor-btn'); // Novo botão para adicionar fornecedor
    const filtroFornecedoresInput = document.getElementById('filtro-fornecedores'); // Input de filtro de fornecedores

    function renderFornecedores() {
        if (tabelaFornecedoresBody) {
            tabelaFornecedoresBody.innerHTML = '';
            const filtro = filtroFornecedoresInput ? filtroFornecedoresInput.value.toLowerCase() : '';
            const fornecedoresFiltrados = fornecedores.filter(f => JSON.stringify(f).toLowerCase().includes(filtro));

            fornecedoresFiltrados.forEach(f => {
                const row = tabelaFornecedoresBody.insertRow();
                const acoesHtml = perfilUsuario === 'admin'
                    ? `<td><button class="action-button edit-fornecedor-btn" data-id="${f.id}">Editar</button> <button class="action-button cancel remove-fornecedor-btn" data-id="${f.id}">Excluir</button></td>`
                    : '';
                row.innerHTML = `
                    <td>${f.id}</td>
                    <td>${f.nome}</td>
                    <td>${f.tipo}</td>
                    <td>${f.responsavelTecnico || 'N/A'}</td>
                    <td>${f.registro || 'N/A'}</td>
                    <td>${f.alvara || 'N/A'}</td>
                    <td>${f.dataAlvara || 'N/A'}</td>
                    <td>${f.fornecedorDoc ? '<a href="#" class="view-doc-btn" data-doc-url="' + f.fornecedorDoc + '">Ver Documento</a>' : 'N/A'}</td>
                    ${acoesHtml}
                `;
            });
        }
    }

    if (filtroFornecedoresInput) {
        filtroFornecedoresInput.addEventListener('input', () => renderFornecedores());
    }

    // Novo listener para o botão "Novo Fornecedor"
    if (gotoAddFornecedorBtn) {
        gotoAddFornecedorBtn.addEventListener('click', () => {
            fornecedorForm.reset(); // Limpa o formulário para nova entrada
            formFornecedorTitulo.textContent = "Novo Fornecedor"; // Define o título para "Novo"
            document.getElementById('fornecedorId').value = ''; // Garante que o ID esteja limpo
            setFocusMode(true); // Habilita o modo de foco (oculta cabeçalho/navegação)
            showSection('formulario-fornecedor-card'); // Exibe o card do formulário
            document.getElementById('formulario-fornecedor-card').scrollIntoView({ behavior: 'smooth' }); // Rola até o formulário
        });
    }

    if (fornecedorForm) {
        fornecedorForm.addEventListener('submit', e => {
            e.preventDefault();
            const id = document.getElementById('fornecedorId').value;
            const data = {
                nome: document.getElementById('fornecedorNome').value,
                tipo: document.getElementById('fornecedorTipo').value,
                // Inclua outros campos do formulário de fornecedor aqui
                alvara: document.getElementById('fornecedorAlvara').value,
                dataAlvara: document.getElementById('fornecedorDataAlvara').value,
                responsavelTecnico: document.getElementById('fornecedorResponsavelTecnico').value,
                registro: document.getElementById('fornecedorRegistro').value,
                tipoRegistro: document.getElementById('fornecedorTipoRegistro').value,
                // fornecedorDoc (se houver lógica para upload e URL)
            };
            if (id) {
                const index = fornecedores.findIndex(f => f.id == id);
                if (index > -1) {
                    fornecedores[index] = { ...fornecedores[index], ...data };
                    displayMessage('Fornecedor atualizado com sucesso!', 'success');
                }
            } else {
                data.id = proximoIdFornecedor++;
                fornecedores.push(data);
                displayMessage('Fornecedor adicionado com sucesso!', 'success');
            }
            salvarDadosNoStorage();
            renderFornecedores();
            fornecedorForm.reset();
            formFornecedorTitulo.textContent = "Novo Fornecedor";
            document.getElementById('fornecedorId').value = ''; // Limpa o ID oculto
            setFocusMode(false); // Remove o modo de foco
            showSection('fornecedores-card'); // Volta para o card da lista de fornecedores
        });
    }

    if (tabelaFornecedoresBody) {
        tabelaFornecedoresBody.addEventListener('click', e => {
            const id = e.target.dataset.id;
            if (e.target.classList.contains('remove-fornecedor-btn')) {
                if (confirm('Tem certeza?')) {
                    fornecedores = fornecedores.filter(f => f.id != id);
                    salvarDadosNoStorage();
                    renderFornecedores();
                    displayMessage('Fornecedor excluído com sucesso!', 'success');
                }
            }
            if (e.target.classList.contains('edit-fornecedor-btn')) {
                const fornecedor = fornecedores.find(f => f.id == id);
                formFornecedorTitulo.textContent = `Editando Fornecedor #${id}`;
                document.getElementById('fornecedorId').value = fornecedor.id;
                document.getElementById('fornecedorNome').value = fornecedor.nome;
                document.getElementById('fornecedorTipo').value = fornecedor.tipo;
                // Preencher outros campos do formulário para edição
                document.getElementById('fornecedorAlvara').value = fornecedor.alvara || '';
                document.getElementById('fornecedorDataAlvara').value = fornecedor.dataAlvara || '';
                document.getElementById('fornecedorResponsavelTecnico').value = fornecedor.responsavelTecnico || '';
                document.getElementById('fornecedorRegistro').value = fornecedor.registro || '';
                document.getElementById('fornecedorTipoRegistro').value = fornecedor.tipoRegistro || '';
                
                setFocusMode(true); // Adiciona o modo de foco
                showSection('formulario-fornecedor-card'); // Exibe o novo card do formulário de fornecedor
                document.getElementById('formulario-fornecedor-card').scrollIntoView({ behavior: 'smooth' }); // Rola para ele
            }
        });
    }

    if (cancelarEdicaoFornecedorBtn) {
        cancelarEdicaoFornecedorBtn.addEventListener('click', () => {
            fornecedorForm.reset();
            formFornecedorTitulo.textContent = "Novo Fornecedor";
            document.getElementById('fornecedorId').value = '';
            setFocusMode(false); // Remove o modo de foco
            showSection('fornecedores-card'); // Volta para o card da lista de fornecedores
        });
    }

    // =================================================================
    // --- LÓGICA DE POPs (COM BUSCA, EDIÇÃO E EXCLUSÃO) ---
    // =================================================================
    const popForm = document.getElementById('popForm');
    const tabelaPopsBody = document.querySelector('#tabela-pops tbody');
    const filtroPop = document.getElementById('filtro-pop');
    const popAlteracaoGroup = document.getElementById('popAlteracao-group'); // Novo elemento
    const cancelarEdicaoPopBtn = document.getElementById('cancelarEdicaoPop'); // Novo botão

    function renderPops(filtro = '') {
         if (tabelaPopsBody) {
            tabelaPopsBody.innerHTML = '';
            const popsFiltrados = pops.filter(p => 
                p.titulo.toLowerCase().includes(filtro) || 
                p.setor.toLowerCase().includes(filtro)
            );

            popsFiltrados.forEach(p => {
                const row = tabelaPopsBody.insertRow();
                const acoesHtml = perfilUsuario === 'admin'
                    ? `<td><button class="action-button view-pop-btn" data-id="${p.id}">Ver</button> <button class="action-button edit-pop-btn" data-id="${p.id}">Editar</button> <button class="action-button cancel remove-pop-btn" data-id="${p.id}">Excluir</button></td>`
                    : `<td><button class="action-button view-pop-btn" data-id="${p.id}">Ver</button></td>`;
                // Exibe o responsável pela última alteração
                row.innerHTML = `<td>${p.id}</td><td>${p.titulo}</td><td>${p.setor}</td><td>${p.versao}</td><td>${p.historico && p.historico.length > 0 ? p.historico[p.historico.length - 1].responsavel : 'N/A'}</td>${acoesHtml}`;
            });
        }
    }

    if (filtroPop) {
        filtroPop.addEventListener('input', () => renderPops(filtroPop.value.toLowerCase()));
    }
    
    if (popForm) {
        popForm.addEventListener('submit', e => {
            e.preventDefault();
            if (perfilUsuario !== 'admin') {
                return displayMessage('Você não tem permissão para salvar POPs.', 'error');
            }
            const id = document.getElementById('popId').value;
            const data = {
                titulo: document.getElementById('popTitulo').value,
                setor: document.getElementById('popSetor').value,
                objetivo: document.getElementById('popObjetivo').value,
                conteudo: document.getElementById('popConteudo').value
            };
            const alteracaoDesc = document.getElementById('popAlteracao').value; // Pega a descrição da alteração

            if (id) {
                // Edição de POP existente
                const index = pops.findIndex(p => p.id == id);
                if (index > -1) {
                    pops[index] = { ...pops[index], ...data };
                    pops[index].versao = (pops[index].versao || 0) + 1; // Incrementa a versão
                    
                    // Adiciona ao histórico de versões
                    if (!pops[index].historico) pops[index].historico = [];
                    pops[index].historico.push({
                        versao: pops[index].versao,
                        data: new Date().toLocaleDateString('pt-BR'),
                        descricao: alteracaoDesc || 'Atualização sem descrição específica.',
                        responsavel: usuarioLogado
                    });
                    displayMessage('POP atualizado com sucesso!', 'success');
                }
            } else {
                // Novo POP
                data.id = proximoIdPop++;
                data.versao = 1;
                data.historico = [{ versao: 1, data: new Date().toLocaleDateString('pt-BR'), descricao: 'Versão inicial.', responsavel: usuarioLogado }];
                pops.push(data);
                displayMessage('Novo POP adicionado com sucesso!', 'success');
            }
            salvarDadosNoStorage();
            renderPops();
            popForm.reset();
            document.getElementById('popId').value = ''; // Limpa o ID oculto
            document.getElementById('popAlteracao').value = ''; // Limpa a descrição da alteração
            popAlteracaoGroup.style.display = 'none'; // Oculta campo de alteração
            cancelarEdicaoPopBtn.style.display = 'none'; // Oculta botão cancelar
            
            // Volta para a visualização da tabela e filtro
            document.querySelector('#tabela-pops').style.display = 'table';
            filtroPop.style.display = 'block';

            setFocusMode(false);
            showSection('pop-card'); // Volta para a lista de POPs
        });
    }

    // Listener para o botão "Editar" e "Excluir" na tabela de POPs
    if (tabelaPopsBody) {
        tabelaPopsBody.addEventListener('click', e => {
            const id = e.target.dataset.id;
            if (e.target.classList.contains('remove-pop-btn')) {
                if (perfilUsuario !== 'admin') {
                    return displayMessage('Você não tem permissão para excluir POPs.', 'error');
                }
                if (confirm('Tem certeza que deseja excluir este POP?')) {
                    pops = pops.filter(p => p.id != id);
                    salvarDadosNoStorage();
                    renderPops();
                    displayMessage('POP excluído com sucesso!', 'success');
                }
            } else if (e.target.classList.contains('edit-pop-btn')) {
                if (perfilUsuario !== 'admin') {
                    return displayMessage('Você não tem permissão para editar POPs.', 'error');
                }

                const pop = pops.find(p => p.id == id);
                document.getElementById('popId').value = pop.id;
                document.getElementById('popTitulo').value = pop.titulo;
                document.getElementById('popSetor').value = pop.setor;
                document.getElementById('popObjetivo').value = pop.objetivo;
                document.getElementById('popConteudo').value = pop.conteudo;

                // Mostra o campo de alteração e o botão de cancelar edição
                document.getElementById('popAlteracao').value = ''; // Limpa o campo de alteração para uma nova edição
                popAlteracaoGroup.style.display = 'block';
                cancelarEdicaoPopBtn.style.display = 'inline-block';

                // Oculta a tabela de POPs e o filtro ao entrar no modo de edição
                document.querySelector('#tabela-pops').style.display = 'none';
                filtroPop.style.display = 'none';
                
                setFocusMode(true); // Oculta cabeçalho/navegação
                showSection('pop-card'); // Exibe o card de POP (que contém o formulário)
                popForm.scrollIntoView({ behavior: 'smooth' }); // Rola até o formulário
            } else if (e.target.classList.contains('view-pop-btn')) {
                // Lógica para visualizar POP (ex: abrir modal com detalhes)
                displayMessage(`Visualizando POP #${id}: ${pops.find(p => p.id == id)?.titulo}`, 'info');
                // Implemente a exibição completa do POP em um modal aqui, se desejar.
            }
        });
    }

    // Listener para o botão Cancelar Edição do POP
    if (cancelarEdicaoPopBtn) {
        cancelarEdicaoPopBtn.addEventListener('click', () => {
            popForm.reset();
            document.getElementById('popId').value = '';
            document.getElementById('popAlteracao').value = ''; // Limpa campo de alteração
            popAlteracaoGroup.style.display = 'none';
            cancelarEdicaoPopBtn.style.display = 'none';
            
            // Re-exibe a tabela e o filtro, e remove o foco
            document.querySelector('#tabela-pops').style.display = 'table';
            filtroPop.style.display = 'block';
            setFocusMode(false);
            showSection('pop-card'); // Volta para o card da lista de POPs
            displayMessage('Edição de POP cancelada.', 'info');
        });
    }

    // =================================================================
    // --- SEÇÃO TRELLO (COM PERMISSÃO E CORREÇÃO DE BUG) ---
    // =================================================================
    const kanbanBoard = document.getElementById('kanban-board');
    const ncForm = document.getElementById('ncForm');
    const cancelNcBtn = document.getElementById('cancel-nc-btn');
    
    function renderTrelloCards() {
        if (!kanbanBoard) return;
        kanbanBoard.querySelectorAll('.card-list').forEach(list => list.innerHTML = '');
        trelloCards.forEach(cardData => {
            const column = kanbanBoard.querySelector(`.card-list[data-column-id="${cardData.column}"]`);
            if (column) {
                column.appendChild(createNCTrelloCard(cardData));
            }
        });
    }

    function createNCTrelloCard(cardData) {
        const cardElement = document.createElement('div');
        cardElement.className = 'trello-style-card';
        cardElement.dataset.cardId = cardData.id;
        cardElement.draggable = (perfilUsuario === 'admin');
        cardElement.innerHTML = `<div class="trello-labels"><span class="trello-label">${cardData.label.toUpperCase()}</span></div><h2>${cardData.title.toUpperCase()}</h2>`;
        return cardElement;
    }

    if (kanbanBoard) {
        kanbanBoard.addEventListener('click', e => {
            if (e.target.classList.contains('add-card-btn')) {
                setFocusMode(true);
                showSection('nc-form-card');
            }
        });

        kanbanBoard.addEventListener('dragstart', e => {
            if (perfilUsuario === 'admin' && e.target.classList.contains('trello-style-card')) {
                e.target.classList.add('dragging');
                e.dataTransfer.setData('text/plain', e.target.dataset.cardId);
            }
        });
        kanbanBoard.addEventListener('dragend', e => e.target.classList.remove('dragging'));
        kanbanBoard.addEventListener('dragover', e => e.preventDefault());
        kanbanBoard.addEventListener('drop', e => {
            e.preventDefault();
            if (perfilUsuario !== 'admin') return;
            const columnList = e.target.closest('.card-list');
            if (columnList) {
                const cardId = e.dataTransfer.getData('text/plain');
                const newColumnId = columnList.dataset.columnId;
                const cardIndex = trelloCards.findIndex(card => card.id === cardId);
                if (cardIndex > -1) {
                    trelloCards[cardIndex].column = newColumnId;
                    salvarDadosNoStorage();
                    renderTrelloCards();
                }
            }
        });
    }

    if (ncForm) {
        ncForm.addEventListener('submit', e => {
            e.preventDefault();
            const newCardData = {
                id: 'card-' + Date.now(),
                title: document.getElementById('nc-title').value,
                label: document.getElementById('nc-label').value,
                description: document.getElementById('nc-description').value,
                column: 'nao-conformidade',
                comments: []
            };
            trelloCards.push(newCardData);
            salvarDadosNoStorage();
            renderTrelloCards();
            ncForm.reset();
            setFocusMode(false);
            showSection('trello-board');
            displayMessage('Não Conformidade criada com sucesso!', 'success');
        });

        if (cancelNcBtn) {
            cancelNcBtn.addEventListener('click', () => {
                setFocusMode(false);
                ncForm.reset();
                showSection('trello-board');
            });
        }
    }

    // =================================================================
    // --- SEÇÃO DE RELATÓRIOS (FUNCIONAL) ---
    // =================================================================
    const gerarRelatorioBtn = document.getElementById('gerar-relatorio-btn');
    const relatorioConteudoDiv = document.getElementById('relatorio-conteudo');
    const graficosContainer = document.getElementById('graficos-container');
    let inspecoesChartInstance = null;
    let popsChartInstance = null;

    if (gerarRelatorioBtn) {
        gerarRelatorioBtn.addEventListener('click', () => {
            if (inspecoesChartInstance) inspecoesChartInstance.destroy();
            if (popsChartInstance) popsChartInstance.destroy();

            const naoConformes = registros.filter(r => r.status === 'Não Conforme');
            let htmlRelatorio = '<h3>Relatório de Não Conformidades</h3>';
            if (naoConformes.length > 0) {
                htmlRelatorio += `<table><thead><tr><th>ID</th><th>Data</th><th>Produto</th><th>Lote</th><th>Fornecedor</th></tr></thead><tbody>`;
                naoConformes.forEach(r => {
                    htmlRelatorio += `<tr><td>${r.id}</td><td>${r.data}</td><td>${r.produto}</td><td>${r.lote}</td><td>${r.fornecedor}</td></tr>`;
                });
                htmlRelatorio += `</tbody></table>`;
            } else {
                htmlRelatorio += '<p>Nenhuma não conformidade registrada.</p>';
            }

            htmlRelatorio += '<h3 style="margin-top: 30px;">Relatório de POPs Cadastrados</h3>';
            if (pops.length > 0) {
                htmlRelatorio += `<table><thead><tr><th>ID</th><th>Título</th><th>Setor</th><th>Versão</th></tr></thead><tbody>`;
                pops.forEach(p => {
                    htmlRelatorio += `<tr><td>${p.id}</td><td>${p.titulo}</td><td>${p.setor}</td><td>${p.versao}</td></tr>`;
                });
                htmlRelatorio += `</tbody></table>`;
            } else {
                htmlRelatorio += '<p>Nenhum POP cadastrado.</p>';
            }
            
            relatorioConteudoDiv.innerHTML = htmlRelatorio;
            
            const conformesCount = registros.filter(r => r.status === 'Conforme').length;
            const inspecoesCtx = document.getElementById('inspecoesChart').getContext('2d');
            inspecoesChartInstance = new Chart(inspecoesCtx, { type: 'pie', data: { labels: ['Conforme', 'Não Conforme'], datasets: [{ data: [conformesCount, naoConformes.length], backgroundColor: ['#28a745', '#dc3545'] }] } });

            const popsPorSetor = pops.reduce((acc, pop) => { acc[pop.setor] = (acc[pop.setor] || 0) + 1; return acc; }, {});
            const popsCtx = document.getElementById('popsChart').getContext('2d');
            popsChartInstance = new Chart(popsCtx, { type: 'bar', data: { labels: Object.keys(popsPorSetor), datasets: [{ label: 'Nº de POPs', data: Object.values(popsPorSetor), backgroundColor: '#58a6ff' }] } });

            graficosContainer.style.display = 'block';
            displayMessage('Relatório completo gerado!', 'success');
        });
    }

    // =================================================================
    // --- SEÇÃO NOTAS FISCAIS - GRÁFICOS ---
    // =================================================================
    const processarNfeGraficoBtn = document.getElementById('processar-nfe-pdf-grafico-btn');
    if (processarNfeGraficoBtn) {
        const nfeGraficoUploadInput = document.getElementById('nfe-pdf-upload-grafico');
        const nfeGraficoProcessStatus = document.getElementById('nfe-pdf-process-status-grafico');
        const graficosNfeContainer = document.getElementById('graficos-nfe-container');
        let volumeNotasChartInstance = null;
        let valorNotasChartInstance = null;

        processarNfeGraficoBtn.addEventListener('click', async () => {
            const file = nfeGraficoUploadInput.files[0];
            if (!file) {
                return displayMessage('Por favor, selecione um arquivo PDF.', 'error');
            }
            nfeGraficoProcessStatus.innerHTML = `<p>Processando, aguarde...</p>`;
            const formData = new FormData();
            formData.append('pdf_file', file);
            try {
                const response = await fetch('http://127.0.0.1:5000/process_pdf', { method: 'POST', body: formData });
                if (!response.ok) { throw new Error(`Erro do servidor: ${response.statusText}`); }
                const summaryData = await response.json();
                if (summaryData && summaryData.length > 0) {
                    renderNFeCharts(summaryData);
                    graficosNfeContainer.style.display = 'block';
                    nfeGraficoProcessStatus.innerHTML = `<p style="color: var(--cor-sucesso-texto);">Gráficos gerados com sucesso!</p>`;
                } else {
                    graficosNfeContainer.style.display = 'none';
                    nfeGraficoProcessStatus.innerHTML = `<p style="color: var(--cor-erro-texto);">Nenhum dado de nota fiscal foi encontrado no PDF.</p>`;
                }
            } catch (error) {
                graficosNfeContainer.style.display = 'none';
                nfeGraficoProcessStatus.innerHTML = `<p style="color: var(--cor-erro-texto);">Erro ao comunicar com o servidor. (${error.message})</p>`;
            }
        });

        function renderNFeCharts(summaryData) {
            summaryData.sort((a, b) => new Date(a.date.split('/').reverse().join('-')) - new Date(b.date.split('/').reverse().join('-')));
            const labels = summaryData.map(d => d.date);
            const counts = summaryData.map(d => d.count);
            const values = summaryData.map(d => d.totalValue);
            if (volumeNotasChartInstance) volumeNotasChartInstance.destroy();
            if (valorNotasChartInstance) valorNotasChartInstance.destroy();
            const valorCtx = document.getElementById('valorNotasChart').getContext('2d');
            valorNotasChartInstance = new Chart(valorCtx, { type: 'bar', data: { labels, datasets: [{ label: 'Valor Total (R\$)', data: values, backgroundColor: 'rgba(40, 167, 69, 0.7)' }] } });
            const volumeCtx = document.getElementById('volumeNotasChart').getContext('2d');
            volumeNotasChartInstance = new Chart(volumeCtx, { type: 'bar', data: { labels, datasets: [{ label: 'Nº de Notas Emitidas', data: counts, backgroundColor: 'rgba(88, 166, 255, 0.7)' }] } });
        }
    }

    // --- INICIALIZAÇÃO DA PÁGINA ---
    function init() {
        renderFornecedores();
        renderRegistros();
        renderPops();
        renderTrelloCards();
        controlarAcessoInicial();
    }

    init();
});