import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

function fetchUser(name, password) {
  return api.post('/users', {
    name,
    password
  })
}

export {
  fetchUser,
}