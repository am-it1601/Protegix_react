import { useForm } from 'react-hook-form';

import { USER_ROLE_TYPE } from '@/constants/enums';
import {
    ForgotPasswordFormData, ForgotPasswordFormSchema
} from '@/lib/zod/ForgotPasswordFormSchema';
import { LoginFormData, LoginFormSchema } from '@/lib/zod/LoginSchema';
import { useForgotPassword, useLogin } from '@/services/query/auth.query';
import { zodResolver } from '@hookform/resolvers/zod';

export const useForgotPasswordForm = () => {
    const form = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(ForgotPasswordFormSchema),
        defaultValues: {
            "email" : "",
        },
    });

    const { mutate, isPending, isError } = useForgotPassword();

    const submit = (values: ForgotPasswordFormData) => {
        mutate({
            ...values,
        });
    };

    return {submit, form, isPending}
}

export type useLoginFormParams = {
    redirectUrl : string
}
export const useLoginForm = ({redirectUrl}: useLoginFormParams) => {
    console.log(`useLogin ${redirectUrl}`)
    

    const form = useForm<LoginFormData>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            username: '',
            password: '',
            roleType: USER_ROLE_TYPE.COMPANY_ADMIN,
            rememberMe: false
        },
    });

    const { mutate, isPending, isError } = useLogin({redirect :redirectUrl});

    const submit = (values: LoginFormData) => {
        mutate({
            ...values,
        });
    };

    return {submit, form, isPending}
}