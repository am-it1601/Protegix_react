import { useQuery } from '@tanstack/react-query';
import { getUserRoles } from './user.role.api';

export function useUserRole() {
    return useQuery({
        queryKey: ['USER_ROLE'],
        queryFn: getUserRoles,
    });
}
