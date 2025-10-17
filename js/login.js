// login.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  // Simulação de login
  const feedback = document.getElementById('loginFeedback');
  feedback.textContent = 'Login realizado com sucesso!';
  setTimeout(() => window.location.href = 'index.html', 1000);
});
