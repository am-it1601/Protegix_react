
import { useQuery } from '@tanstack/react-query';

import { companyInfo } from '../api';

export function useCompanyInfo() {
    return useQuery({
        queryKey: ['COMPANY_INFO'],
        queryFn: companyInfo,
    });
}


