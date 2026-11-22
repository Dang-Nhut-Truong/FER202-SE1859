import { postLogin } from '../api/client.js';

export async function login(email, password) {
  const user = await postLogin(email.trim(), password);
  localStorage.setItem('token', user.token);
  localStorage.setItem('name', user.name);
  return user;
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('name');
}

export const isLoggedIn = () => localStorage.getItem('token') !== null;
