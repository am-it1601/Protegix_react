import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { login } from './auth.api';

export function useLogin() {
    return useMutation({
        mutationFn: login,
        mutationKey: ['AUTH'],
        onError: (error, variables, context) => {
            toast.error('Error while login');
        },
        onSuccess: (data, variables, context) => {
            toast.success('login Successfully');
        },
    });
}
