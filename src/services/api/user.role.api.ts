import axios from 'axios';

import { UserRoleFormData } from '@/lib/zod/UserRoleSchema';
import { UserRoleResponse, UserRoleSearchResponse } from '@/types/http';

const API_BASE_URL = (import.meta as any).env.VITE_API_BASE_URL;

const axiosInstance = axios.create({ baseURL: API_BASE_URL });
const searchUserRole = async () => {
    return (
        await axiosInstance.get<UserRoleSearchResponse>('user-role', {
            params: {
                page: 1,
                limit: 10,
            },
        })
    ).data;
};

const saveUserRole = async (formData: UserRoleFormData) => {
    return (await axiosInstance.post<UserRoleResponse>('user-role', formData)).data;
}

const updateUserRole = async (formData: UserRoleFormData) => {
    return (await axiosInstance.put<UserRoleResponse>('user-role', formData)).data;
}

export { searchUserRole, saveUserRole, updateUserRole};
