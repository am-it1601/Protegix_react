import { useForm } from 'react-hook-form';

import { USER_ROLE_TYPE } from '@/constants/enums';
import { LoginFormData, LoginFormSchema } from '@/lib/zod/LoginSchema';
import { useLogin } from '@/services/query/auth.query';
import { zodResolver } from '@hookform/resolvers/zod';

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

    const { mutate, isPending } = useLogin({redirect :redirectUrl});

    const submit = (values: LoginFormData) => {
        mutate({
            ...values,
        });
    };

    return {submit, form, isPending}
}