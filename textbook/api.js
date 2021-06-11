const instance = axios.create();

function fetchUserById(id) {
  return instance.get(`users/${id}`)
}

export { fetchUserById };