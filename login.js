document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorDiv = document.getElementById('login-error');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        errorDiv.style.display = 'none'; // Oculta a mensagem de erro anterior

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            // Endereço do seu backend Flask
            const response = await fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                // Login bem-sucedido
                // Salva informações do usuário na sessão do navegador
                sessionStorage.setItem('usuarioLogado', data.username);
                sessionStorage.setItem('perfilUsuario', data.perfil);

                // Redireciona para a página principal
                window.location.href = 'index.html';
            } else {
                // Exibe a mensagem de erro retornada pelo servidor
                errorDiv.textContent = data.error || 'Usuário ou senha inválidos.';
                errorDiv.style.display = 'block';
            }
        } catch (error) {
            // Trata erros de conexão com o servidor
            console.error('Erro ao tentar fazer login:', error);
            errorDiv.textContent = 'Não foi possível conectar ao servidor. Tente novamente mais tarde.';
            errorDiv.style.display = 'block';
        }
    });
});