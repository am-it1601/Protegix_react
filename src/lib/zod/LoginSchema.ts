import { z } from 'zod';

import { USER_ROLE_TYPE } from '@/constants/enums';

export const LoginFormSchema = z.object({
        username: z.string(),
        password: z.string().min(8, 'Password must be at least 8 characters long'),
        roleType: z.literal(USER_ROLE_TYPE.COMPANY_ADMIN),
        rememberMe: z.boolean().default(false),
    });

export type LoginFormData = z.infer<typeof LoginFormSchema>;