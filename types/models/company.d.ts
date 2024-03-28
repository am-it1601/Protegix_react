export interface ICompany {
    _id: string;
    name:string;
}

export type PartialCompany = Pick<ICompany, '_id' | 'name'>

export interface licenseInfo{
    registeredUsers:number;
    remainingLicense:number;
    totalLicense:number;
}