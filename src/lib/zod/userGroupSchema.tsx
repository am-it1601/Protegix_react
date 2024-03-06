import { z } from 'zod';

export const userGroupSchema = z.object({
    name: z
        .string({
            required_error: 'User Group name must be defined',
        })
        .min(3, 'Role name must be at least 3 character long')
        .max(50, 'Role name must not exceed 50 characters long'),
});

export type userGroupFormData = z.infer<typeof userGroupSchema>;
