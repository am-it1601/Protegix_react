
import { z } from 'zod';

export const UserRoleSchema = z.object({
    name: z.string({
            required_error : 'Role name must be defined',
        }
    ).min(3, "Role name must be at least 3 character long").max(50, 'Role name must not exceed 50 characters long'),
    companyId: z.string(),
    roleType: z.enum(['COMPANY_ADMIN', 'COMPANY_USER'], {
        required_error : 'Role type must be selected',
        invalid_type_error : 'Invalid role type'
    }),
    permissions: z.array(z.string()),
})

export type UserRoleFormData = z.infer<typeof UserRoleSchema>