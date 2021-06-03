import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

function fetchUser(name, password) {
  return axiosApi.post('/users', {
    name,
    password
  })
}

export {
  fetchUser,
}