import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { useAuthentication } from '@/hooks';
import { ILoggedInUser } from '@/types/models';
import { useMutation } from '@tanstack/react-query';

import { login, logout } from '../api/auth.api';

type useLoginParams = {
    redirect:string;
}
export function useLogin({ redirect }:useLoginParams) {
    const navigation = useNavigate();
    const { setPrincipal } = useAuthentication();
    return useMutation({
        mutationFn: login,
        mutationKey: ['AUTH'],
        onError: (error, variables, context) => {
            console.error(error);
            toast.error('Error while login');
        },
        onSuccess: (data, variables, context) => {
            const loggedInUser = data!.data;
            toast.success('User Login Successful');
            
            setPrincipal(loggedInUser!);
            setTimeout(() => {
                navigation(redirect);
            }, 500);
        },
    });
}

export function useLogout() {
    const navigate = useNavigate();
    const { setPrincipal } = useAuthentication();

    return useMutation({
        mutationFn: logout,
        mutationKey: ['AUTH'],
        onError: (error, variables, context) => {
            toast.error('Error while login');
        },
        onSuccess: (data, variables, context) => {
            toast.success('Sign-out Successful');
            setPrincipal(null as unknown as ILoggedInUser);
            //setTimeout(() => navigate('login'), 1000);
        },
    });
}
