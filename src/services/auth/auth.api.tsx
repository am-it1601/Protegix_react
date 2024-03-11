import axiosInstance from '@/lib/axiosInstance';
import { TLogin } from 'types';

const login = async (formData: TLogin) => {
    return (await axiosInstance.post('auth/login', formData)).data;
};

export { login };
