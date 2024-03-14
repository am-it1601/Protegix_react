import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import RoleType from '@/components/dropdowns/RoleType';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { defaultUserRole } from '@/lib/constants';
import { UserRoleFormData, UserRoleSchema } from '@/lib/zod/UserRoleSchema';
import { useAddOrUpdateUserRole } from '@/services/user-role/user.role.query';
import { zodResolver } from '@hookform/resolvers/zod';
import { CircleBackslashIcon, PlusCircledIcon } from '@radix-ui/react-icons';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement> & {
    type: 'Create' | 'Edit';
    userRole?: UserRoleFormData | undefined;
    userRoleId: string | undefined;
};

const UserRoleForm: React.FC<UserAuthFormProps> = ({ className, type = 'Create', ...props }) => {
    const initialValue = { ...defaultUserRole, companyId: '65e2fd77518effe02e3c2cbd' };

    const form = useForm<UserRoleFormData>({
        resolver: zodResolver(UserRoleSchema),
        defaultValues: { ...initialValue },
    });

    const { isPending, mutate } = useAddOrUpdateUserRole({ type });

    const submitForm = (formData: UserRoleFormData) => {
        console.log(formData, form.formState.errors);
        mutate(formData);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitForm)}>
                <Card className="drop-shadow-lg">
                    <CardHeader>
                        <CardTitle>
                            <CardTitle>{`${type === 'Create' ? 'Add New' : 'Edit'} User Role`}</CardTitle>
                            <CardDescription className="py-2">
                                <span className="p-regular-14">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
                            </CardDescription>
                            <Separator />
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="py-4">
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-5 md:flex-row">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormControl>
                                                <Input placeholder="Role Name" {...field} className="input-field" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="roleType"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormControl>
                                                <RoleType onChangeHandler={field.onChange} value={field.value} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Separator />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className="gap-4 ml-auto flex-between">
                            <Button
                                variant="destructive"
                                className="gap-2 rounded-sm"
                                type="reset"
                                onClick={() => {
                                    form.reset({
                                        name: undefined,
                                        roleType: undefined,
                                    });
                                }}>
                                <CircleBackslashIcon />
                                Cancel
                            </Button>
                            <Button className="gap-2 rounded-sm" disabled={isPending || !form.formState.isDirty} type="submit">
                                <PlusCircledIcon />
                                Add
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </form>
        </Form>
    );
};

export default UserRoleForm;
