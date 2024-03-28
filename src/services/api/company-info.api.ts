import { CompanyLicenseInfoResponse } from 'types';

import axiosInstance from '@/lib/axiosInstance';

const companyRoute = 'company/';
const companyInfo = async (): Promise<CompanyLicenseInfoResponse | undefined> => {
    return (await axiosInstance.get(companyRoute + 'licenseInfo')).data;
};

export { companyInfo };
