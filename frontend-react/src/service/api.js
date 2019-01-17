import axios from 'axios';

const API = {
  get: path => axios.get(`api${path}`).then(response => response.data)
  
};


export default API;