import axios from 'axios';
import { UserGroupResponseType } from 'types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log(API_BASE_URL);

const axiosInstance = axios.create({ baseURL: API_BASE_URL });
const userGroup = async (params: any) => {
  return (
    await axiosInstance.get<UserGroupResponseType>('user-group', {
      params,
    })
  ).data;
};

const saveUserGroup = async (formData: any) => {
  return (await axiosInstance.post<UserGroupResponseType>('user-group', formData)).data;
};

const updateUserGroup = async (formData: any) => {
  return (await axiosInstance.put<UserGroupResponseType>('user-group', formData)).data;
};

export { saveUserGroup, updateUserGroup, userGroup };
