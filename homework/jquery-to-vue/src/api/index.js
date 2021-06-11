import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
});

/**
 * 
 * @param {string} name 로그인 아이디
 * @param {string} password 로그인 비밀번호
 * @returns 
 */
function fetchUser(name, password) {
  return api.post('/users', {
    name,
    password,
  });
}

export { fetchUser };
