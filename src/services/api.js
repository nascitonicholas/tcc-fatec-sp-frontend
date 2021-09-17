import axios from 'axios';

const apiContatos = axios.create({
  baseURL: 'http://18.228.118.20:8003',
  //baseURL: 'http://localhost:8003',
});

export default apiContatos;
