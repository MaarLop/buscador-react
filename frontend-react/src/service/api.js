import axios from 'axios';

const server = 'http://localhost:5000';

const API = {
  get: path => axios.get(`${server}${path}`).then(response => response.data)
};

export default API;