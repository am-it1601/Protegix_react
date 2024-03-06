import { toast } from 'sonner';

import { useMutation, useQuery } from '@tanstack/react-query';

import { getUserRoles, saveUserRole, updateUserRole } from './user.role.api';

export function useUserRole() {
    return useQuery({
        queryKey: ['USER_ROLE'],
        queryFn: getUserRoles,
    });
}

type useAddOrUpdateUserRoleParams = {type: 'Create' | 'Edit'};

export function useAddOrUpdateUserRole({type }:useAddOrUpdateUserRoleParams){
    
    return useMutation({
        mutationFn: type == 'Create' ? saveUserRole: updateUserRole,
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
