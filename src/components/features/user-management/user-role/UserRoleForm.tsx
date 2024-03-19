import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import RoleType from '@/components/dropdowns/RoleType';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { UserRoleFormData } from '@/lib/zod/UserRoleSchema';
import { WRITE_MODE } from '@/types/app';
import { IPermission } from '@/types/models';
import { CircleBackslashIcon, PlusCircledIcon } from '@radix-ui/react-icons';

import { useUserRoleForm } from '../hooks';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement> & {
    type: WRITE_MODE;
    userRole?: UserRoleFormData | undefined;
    userRoleId: string | undefined;
};

const UserRoleForm: React.FC<UserAuthFormProps> = ({ className, type = 'CREATE', ...props }) => {
    const { form, submitForm, isAclError, isPending, permissionData } = useUserRoleForm({ type });
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitForm)}>
                <Card className="drop-shadow-lg">
                    <CardHeader>
                        <CardTitle>
                            <CardTitle>{`${type == 'CREATE' ? 'Add New' : 'Edit'} User Role`}</CardTitle>
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
                            <div>{!isAclError && permissionData && renderPermissions(form, permissionData.data)}</div>
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

const renderPermissions = (form: UseFormReturn, permissionData: IPermission[]) => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="p-semibold-16">User Role Permissions</h1>
            <Separator />
            <FormField
                control={form.control}
                name="permissions"
                render={() => {
                    return permissionData.map((p) => {
                        return (
                            <div className="flex flex-col gap-4 p-4">
                                <FormLabel className="p-semibold-14">{p.displayName}</FormLabel>
                                <Separator />
                                <div className="grid gap-6 grid-cols-5 px-4 py-2">
                                    {p.access.map((a) => (
                                        <FormField
                                            key={a.value}
                                            control={form.control}
                                            name="permissions"
                                            render={({ field }) => {
                                                return (
                                                    <FormItem key={a.value} className="flex flex-row items-start space-x-3 space-y-0">
                                                        <FormControl>
                                                            <Checkbox
                                                                className="rounded"
                                                                checked={field.value?.includes(a.value)}
                                                                onCheckedChange={(checked) => {
                                                                    return checked
                                                                        ? field.onChange([...field.value, a.value])
                                                                        : field.onChange(field.value?.filter((value: string) => value !== a.value));
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">{a.key}</FormLabel>
                                                    </FormItem>
                                                );
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        );
                    });
                }}
            />
        </div>
    );
};

export default UserRoleForm;
