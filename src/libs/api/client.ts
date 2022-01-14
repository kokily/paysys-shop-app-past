import axios from 'axios';

const client = axios.create({
  baseURL: 'http://192.168.0.31:4000/api',
  withCredentials: true,
});

export default client;
