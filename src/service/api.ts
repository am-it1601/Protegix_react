import axiosInstance from './axiosInstance';
import { globalErrorHandler } from './globalErrorHandler';

export const UserRole = async () => globalErrorHandler(() => axiosInstance.get('/user-role'));
export const UserGroup = async () => globalErrorHandler(() => axiosInstance.get('/user-group'));
