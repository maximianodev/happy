import axios from 'axios';

const api = axios.create({
  baseURL: 'http:// seuipaqui :3333' 
  // O endereço aqui precisa ser seu endereço IP com a porta do backend, no caso 3333.
})

export default api;