import { validateLogin } from '../auth/validation.js';
import { login } from '../auth/authService.js';

const form = document.getElementById('login-form');
const button = document.getElementById('submit');
const show = (id, text) => { document.getElementById(id).textContent = text ?? ''; };

form.addEventListener('submit', async event => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errors = validateLogin(email, password);
  show('email-error', errors.email);
  show('password-error', errors.password);
  show('form-error', '');
  if (errors.email || errors.password) return;

  button.disabled = true;
  button.textContent = 'Đang đăng nhập…';
  try {
    await login(email, password);
    window.location.href = 'home.html';
  } catch (error) {
    show('form-error', error.message);
  } finally {
    button.disabled = false;
    button.textContent = 'Đăng nhập';
  }
});
