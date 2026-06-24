// ==========================================================================
// 1. CONTROLE DO MENU RESPONSIVO (ABRIR / FECHAR)
// ==========================================================================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

// Comentário Obrigatório: Adiciona evento de clique para abrir/fechar o menu mobile
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fecha o menu automaticamente se o usuário clicar em um link (útil em Single Pages, bom manter)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});


// ==========================================================================
// 2. CONTROLE DO TEMA ESCURO / CLARO
// ==========================================================================
const themeToggle = document.getElementById('themeToggle');

// Comentário Obrigatório: Verifica se o usuário já tinha uma preferência salva
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

// Comentário Obrigatório: Alterna a classe de tema e salva a escolha no LocalStorage
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
// ==========================================================================
// 3. VALIDAÇÃO DO FORMULÁRIO E MENSAGEM DE CONFIRMAÇÃO
// ==========================================================================
const contactForm = document.getElementById('contactForm');
const feedbackMessage = document.getElementById('feedbackMessage');

// Comentário Obrigatório: Verifica se o formulário existe na página atual antes de rodar o script
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        // Impede o envio padrão do formulário (recarregar a página)
        event.preventDefault();

        // Captura os valores dos campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Limpa classes anteriores de feedback
        feedbackMessage.className = 'feedback-message';

        // Validação simples com JavaScript Puro
        if (nome === '' || email === '' || mensagem === '') {
            feedbackMessage.textContent = '❌ Por favor, preencha todos os campos obrigatórios.';
            feedbackMessage.classList.add('error');
            return; // Interrompe a execução
        }

        // Validação básica de formato de e-mail usando Regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            feedbackMessage.textContent = '❌ Por favor, insira um e-mail válido.';
            feedbackMessage.classList.add('error');
            return;
        }

        // Comentário Obrigatório: Se passar nas validações, exibe mensagem de sucesso
        feedbackMessage.textContent = `Thank you, ${nome}! Sua mensagem foi enviada com sucesso de forma dinâmica.`;
        feedbackMessage.classList.add('success');

        // Limpa o formulário após o envio bem-sucedido
        contactForm.reset();
    });
}