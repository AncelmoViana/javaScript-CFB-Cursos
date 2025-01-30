const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validação de e-mail
  if (emailInput.value === '') {
    emailError.textContent = 'E-mail é obrigatório';
  } else if (!isValidEmail(emailInput.value)) {
    emailError.textContent = 'E-mail inválido';
  } else {
    emailError.textContent = '';
  }

  // Validação de senha
  if (passwordInput.value === '') {
    passwordError.textContent = 'Senha é obrigatória';
  } else {
    passwordError.textContent = '';
  }

  // Se não houver erros, prosseguir com o login
  if (emailError.textContent === '' && passwordError.textContent === '') {
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor
    alert('Login realizado com sucesso!');
  }
});

function isValidEmail(email) {
  // Expressão regular para validar e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}