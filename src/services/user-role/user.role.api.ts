import axios from 'axios';
import { UserRoleResponseType } from 'types';

import { UserRoleFormData } from '@/lib/zod/UserRoleSchema';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({ baseURL: API_BASE_URL });
const getUserRoles = async () => {
    return (
        await axiosInstance.get<UserRoleResponseType>('user-role', {
            params: {
                page: 1,
                limit: 10,
            },
        })
    ).data;
};

const saveUserRole = async (formData: UserRoleFormData) => {
    return (await axiosInstance.post<UserRoleResponseType>('user-role', formData)).data;
}

const updateUserRole = async (formData: UserRoleFormData) => {
    return (await axiosInstance.put<UserRoleResponseType>('user-role', formData)).data;
}

export { getUserRoles, saveUserRole, updateUserRole};
