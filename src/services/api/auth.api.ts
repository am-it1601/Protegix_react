import { BaseResponse, LoginResponse } from 'types';

import axiosInstance from '@/lib/axiosInstance';
import { ForgotPasswordFormData } from '@/lib/zod/ForgotPasswordFormSchema';
import { LoginFormData } from '@/lib/zod/LoginSchema';

const AuthRoute = 'auth/';
const login = async (formData: LoginFormData): Promise<LoginResponse | undefined> => {
    return await axiosInstance.post(AuthRoute + 'login', formData);
};

const logout = async (): Promise<BaseResponse | undefined> => {
    return await axiosInstance.post(AuthRoute + 'logout', {});
};

const forgotPassword = async (formData: ForgotPasswordFormData): Promise<BaseResponse | undefined> => {
    return await axiosInstance.post(AuthRoute + 'forgot-password', formData);
}
export { login, logout, forgotPassword };
