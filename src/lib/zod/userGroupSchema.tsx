import { z } from 'zod';

export const userGroupSchema = z.object({
  name: z.string().min(3),
});

export type userGroupFormData = z.infer<typeof userGroupSchema>;
