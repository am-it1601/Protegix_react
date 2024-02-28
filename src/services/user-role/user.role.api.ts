import axios from 'axios';
import { UserRoleResponseType } from 'types';

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

export { getUserRoles };
