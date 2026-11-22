// Fake backend for the demo: the right account is demo@fpt.edu.vn / 123456.
export function postLogin(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'demo@fpt.edu.vn' && password === '123456') resolve({ token: 'demo-token', name: 'Demo' });
      else reject(new Error('Sai email hoặc mật khẩu'));
    }, 800);
  });
}
