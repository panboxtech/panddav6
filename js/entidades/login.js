// login.js - lógica de login separada das regras de negócio
const form = document.getElementById('loginForm');
const feedbackEl = document.getElementById('loginFeedback');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  feedbackEl.textContent = 'Validando...';

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (!email || !password) {
    feedbackEl.style.color = 'var(--danger)';
    feedbackEl.textContent = 'Preencha email e senha.';
    return;
  }

  // Simulação de autenticação local (mock)
  await new Promise(r => setTimeout(r, 700));
  if (email === 'admin@pandda.test' && password === 'senha123') {
    feedbackEl.style.color = 'var(--success)';
    feedbackEl.textContent = 'Login realizado com sucesso, redirecionando...';
    setTimeout(() => location.href = 'index.html', 800);
    return;
  }

  feedbackEl.style.color = 'var(--danger)';
  feedbackEl.textContent = 'Credenciais inválidas. Use admin@pandda.test / senha123';
});
