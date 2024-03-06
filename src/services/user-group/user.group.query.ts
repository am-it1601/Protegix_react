import { toast } from 'sonner';

import { useMutation, useQuery } from '@tanstack/react-query';
import { saveUserGroup, updateUserGroup, userGroup,  } from './user-group.api';


export function useUserGroup(params: { page: number; limit: number }) {
    return useQuery({
        queryKey: ['USER_GROUP', params], // Include params in the query key
        queryFn: () => userGroup(params), // Pass params to the userGroup function
    });
}


type useAddOrUpdateUserGroupParams = {type: 'Create' | 'Edit'};

export function useAddOrUpdateUserGroup({type }:useAddOrUpdateUserGroupParams){
    
    return useMutation({
        mutationFn: type == 'Create' ? saveUserGroup: updateUserGroup,
        mutationKey: ['USER_GROUP'],
        onError : (error, variables, context) => {
            // An error happened!
            console.log(`rolling back optimistic update with id ${context.id}`);
            toast.error('Error while creating USER_GROUP')
        },
        onSuccess: (data, variables, context) => {
            toast.success('Successfully created USER_GROUP')
        },
        
    })
}
