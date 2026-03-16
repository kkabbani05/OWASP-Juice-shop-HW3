document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');
  if (!username.includes('@')) {
    errorMessage.textContent = 'Username must contain @';
  } else if (password.length < 8) {
    errorMessage.textContent = 'Password must be at least 8 characters long';
  } else {
    errorMessage.textContent = 'Login successful';
  }
});