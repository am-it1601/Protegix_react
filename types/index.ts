export type CompanyType = {
    name: string;
    _id: string;
};
export type TPageData= {
  page: number;
  limit: number | null;
  totalItems: number;
  itemsPerPage: number;
}

type GenericResponse<T> = {
    status: 'SUCCESS' | 'ERROR' | 'PENDING' | string;
    authenticated?: boolean;
    data?: T;
    content?: T[];
    pageData?:TPageData
};
export type UserRoleType = {
  _id: string;
  roleType: 'COMPANY_USER' | 'COMPANY_ADMIN';
  name: string;
  companyId: string;
  company: Partial<CompanyType>;
  numberOfUser?: number;
};
export type UserGroupType = {
  _id: string;
  name: string;
  companyId: string;
  company: Partial<CompanyType>;
  numberOfUser?: number;
};

export type UserRoleResponseType = GenericResponse<UserRoleType>;
export type UserGroupResponseType = GenericResponse<UserGroupType>;

export type Theme = "dark" | "light" | "system"

export type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}