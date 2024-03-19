import { AbstractResponseObject, PaginatedResponseObject } from './abstract';
import { ILoggedInUser, IPermission, IUserGroup, IUserRole } from './models';

export interface ILoginRequest {
    username: string;
    password: string;
    roleType?: 'COMPANY_ADMIN';
    rememberMe?: boolean;
}



export interface LoginResponse extends AbstractResponseObject<ILoggedInUser> {}

export interface UserGroupSearchResponse extends PaginatedResponseObject<IUserGroup>{}
export interface UserGroupResponse extends AbstractResponseObject<IUserGroup>{}

export interface UserRoleSearchResponse extends PaginatedResponseObject<IUserRole>{}
export interface UserRoleResponse extends AbstractResponseObject<IUserRole>{}
export interface PermissionResponse extends AbstractResponseObject<IPermission[]>{}