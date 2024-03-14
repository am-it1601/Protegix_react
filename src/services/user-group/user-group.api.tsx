import { userGroupFormData } from '@/lib/zod/userGroupSchema';
import axios from 'axios';
import { UserGroupResponseType } from 'types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log(API_BASE_URL);

const axiosInstance = axios.create({ baseURL: API_BASE_URL });
const userGroup = async () => {
    return (
        await axiosInstance.get<UserGroupResponseType>('user-group', {
            params: {
                page: 1,
                limit: 10,
            },
        })
    ).data;
};

const saveUserGroup = async (formData: any) => {
    return (await axiosInstance.post<UserGroupResponseType>('user-group', formData)).data;
};

const updateUserGroup = async (formData: any) => {
    return (await axiosInstance.put<UserGroupResponseType>('user-group', formData)).data;
};

export { userGroup, saveUserGroup, updateUserGroup };
