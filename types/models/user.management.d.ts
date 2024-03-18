import { BaseDocument } from '../abstract';
import { USER_ACCOUNT_STATUS } from '../enums';
import { ICompany, PartialCompany } from './company';
import { IUserRole } from './user.management.d';

export interface IUserRole extends BaseDocument{
    numberOfUsers:number;
    permissions?:string[]
    companyId: string;
    name:string;
    company: PartialCompany
}
export type PartialUserRole = Pick<IUserRole, '_id' | 'name'>


export interface IUserGroup extends BaseDocument{
    numberOfUsers:number;
    companyId: string;
    name: string
    company: PartialCompany
}

export type PartialUserRole = Pick<IUserGroup, '_id' | 'name'>


export interface IUser extends BaseDocument{
    email:string;
    displayName:string;
    companyId:string;
    company:ICompany;
    username:string;
    status: USER_ACCOUNT_STATUS
    userRole: PartialUserRole
    userGroup:PartialUserGroup
}

export interface ILoggedInUser extends IUser {
    isCompanyAdmin:boolean;
    permissions:string[];

}