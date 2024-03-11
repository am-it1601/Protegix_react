import axios from 'axios';
const API_BASE_URL = (import.meta as any).env.VITE_API_BASE_URL;


const axiosInstance = axios.create({
 baseURL: API_BASE_URL,
 withCredentials: true,

});

axiosInstance.interceptors.request.use(
 (config) => {
  const token = 'yourBearerToken';
  config.headers.Authorization = `Bearer ${token}`;
  return config;
 },
 (error) => {
  return Promise.reject(error);
 }
);

export default axiosInstance;
