export function validateLogin(email, password) {
  const errors = {};
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = 'Email không hợp lệ';
  if (password.length < 6) errors.password = 'Mật khẩu tối thiểu 6 ký tự';
  return errors;
}
