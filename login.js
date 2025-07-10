document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorDiv = document.getElementById('login-error');

    // Lista de usuários, senhas e perfis.
    // Em um sistema real, isso JAMAIS ficaria no código.
    const usuarios = {
        'ivano': { senha: '123', perfil: 'admin' },
        'danieli': { senha: '123', perfil: 'admin' },
        'otavio': { senha: '123', perfil: 'admin' },
        'luiz': { senha: '123', perfil: 'funcionario' },
        'gustavo': { senha: '123', perfil: 'funcionario' },
        'thiago': { senha: '123', perfil: 'funcionario' },
        'joao': { senha: '123', perfil: 'funcionario' }
    };

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.toLowerCase();
        const password = document.getElementById('password').value;

        const usuario = usuarios[username];

        if (usuario && usuario.senha === password) {
            // Salva informações do usuário na sessão do navegador
            sessionStorage.setItem('usuarioLogado', username);
            sessionStorage.setItem('perfilUsuario', usuario.perfil);

            // Redireciona para a página principal
            window.location.href = 'index.html';
        } else {
            errorDiv.style.display = 'block';
        }
    });
});
