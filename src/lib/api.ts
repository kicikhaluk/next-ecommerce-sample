import axios from 'axios';
import { cookies } from 'next/headers';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
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
