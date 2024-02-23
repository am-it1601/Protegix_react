import axios from 'axios';

const BASE_URL = 'http://192.168.1.17:4200/api';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = 'yourBearerToken';
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
