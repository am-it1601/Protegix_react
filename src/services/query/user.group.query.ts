import { toast } from 'sonner';

import { WRITE_MODE } from '@/types/app';
import { useMutation, useQuery } from '@tanstack/react-query';

import { saveUserGroup, searchUserGroup, updateUserGroup } from '../api/user-group.api';

export function useSearchUserGroup() {
    return useQuery({
        queryKey: ['USER_GROUP'],
        queryFn: searchUserGroup,
    });
}

// TODO  : Place the type properly.
type useAddOrUpdateUserGroupParams = {type: WRITE_MODE};

export function useAddOrUpdateUserGroup({type }:useAddOrUpdateUserGroupParams){
    
    return useMutation({
        mutationFn: type == 'CREATE' ? saveUserGroup: updateUserGroup,
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
