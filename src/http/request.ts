import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3000/api/v1/'
});

request.interceptors.response.use(res => {
  return res.data;
});

export { request };
