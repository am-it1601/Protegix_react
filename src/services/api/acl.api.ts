import { PERMISSION_SCOPE } from '@/constants/enums';
import axiosInstance from '@/lib/axiosInstance';
import { PermissionResponse } from '@/types/http';

export const getPermissions = async (scope:PERMISSION_SCOPE) => {

    return (await axiosInstance.get<PermissionResponse>("/acl", {params : {scope}})).data;

}