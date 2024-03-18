export interface ICompany {
    _id: string;
    name:string;
}

export type PartialCompany = Pick<ICompany, '_id' | 'name'>