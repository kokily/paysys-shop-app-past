import axios from 'axios';

const client = axios.create({
  baseURL: 'http://172.31.145.139:4000/api',
  withCredentials: true,
});

export default client;
