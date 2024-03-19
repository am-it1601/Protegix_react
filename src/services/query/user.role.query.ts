import { toast } from 'sonner';

import { WRITE_MODE } from '@/types/app';
import { useMutation, useQuery } from '@tanstack/react-query';

import { saveUserRole, searchUserRole, updateUserRole } from '../api/user.role.api';

export function useUserRole() {
    return useQuery({
        queryKey: ['USER_ROLE'],
        queryFn: searchUserRole,
    });
}

type useAddOrUpdateUserRoleParams = {type: WRITE_MODE};

export function useAddOrUpdateUserRole({type }:useAddOrUpdateUserRoleParams){
    
    return useMutation({
        mutationFn: type == 'CREATE' ? saveUserRole: updateUserRole,
        mutationKey: ['USER_ROLE'],
        onError : (error, variables, context) => {
            // An error happened!
            console.log(`rolling back optimistic update with id ${context.id}`);
            toast.error('Error while creating user role')
        },
        onSuccess: (data, variables, context) => {
            toast.success('Successfully created user role')
        },
        
    })
}
