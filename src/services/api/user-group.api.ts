import axiosInstance from '@/lib/axiosInstance';
import { UserGroupResponse, UserGroupSearchResponse } from '@/types/http';

const baseEndpoint = 'user-group';
const searchUserGroup = async () => {
    return (
        await axiosInstance.get<UserGroupSearchResponse>(baseEndpoint, {
            params: {
                page: 1,
                limit: 10,
            },
        })
    ).data;
};

const saveUserGroup = async (formData: any) => {
    return (await axiosInstance.post<UserGroupResponse>('user-group', formData)).data;
};

const updateUserGroup = async (formData: any) => {
    return (await axiosInstance.put<UserGroupResponse>('user-group', formData)).data;
};

export { saveUserGroup, updateUserGroup, searchUserGroup };
