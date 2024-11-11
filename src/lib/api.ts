import axios from 'axios';
import { cookies } from 'next/headers';
const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

api.interceptors.request.use(
  (config) => {
    const token = cookies().get('token')?.value;
    if (token) {
      config.headers['Content-Type'] = 'application/json';
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
