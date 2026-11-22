import { validateLogin } from '../auth/validation.js';

const form = document.getElementById('login-form');
const show = (id, text) => { document.getElementById(id).textContent = text ?? ''; };

form.addEventListener('submit', event => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errors = validateLogin(email, password);
  show('email-error', errors.email);
  show('password-error', errors.password);
});
