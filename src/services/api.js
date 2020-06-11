import axios from 'axios';

const api = axios.create({
  baseURL: 'https://enable-api.herokuapp.com',
});

export default api;
