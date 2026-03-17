document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');
  if (!email.includes('@')) {
    errorMessage.textContent = 'email must contain @';
  } else if (password.length < 8) {
    errorMessage.textContent = 'Password must be at least 8 characters long';
  } else {
    errorMessage.textContent = 'Login successful';
  }
});