import { PERMISSION_SCOPE } from '@/constants/enums';
import { useQuery } from '@tanstack/react-query';

import { getPermissions } from '../api/acl.api';

export function useAcl(scope:PERMISSION_SCOPE){
 
    return useQuery({
        queryKey : ["ACL", scope],
        queryFn : async () => getPermissions(scope),
    })
}