import { isLoggedIn, logout } from '../auth/authService.js';

if (!isLoggedIn()) window.location.replace('login.html');

document.getElementById('welcome').textContent = `Xin chào, ${localStorage.getItem('name') ?? ''}`;
document.getElementById('logout').addEventListener('click', () => {
  logout();
  window.location.href = 'login.html';
});
