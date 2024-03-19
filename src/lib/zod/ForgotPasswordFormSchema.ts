import { z } from 'zod';

export const ForgotPasswordFormSchema = z.object({
    email: z.string({
        required_error : "Email is required"
    }).email({
        message : 'Must be a valid email address'
    })
})

export type ForgotPasswordFormData = z.infer<typeof ForgotPasswordFormSchema>