import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { userGroupFormData, userGroupSchema } from '@/lib/zod/userGroupSchema';
import { useAddOrUpdateUserGroup } from '@/services/query/user.group.query';
import { WRITE_MODE } from '@/types/app';
import { zodResolver } from '@hookform/resolvers/zod';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { CircleBackslashIcon, PlusCircledIcon } from '@radix-ui/react-icons';

type UserGroupFormProps = React.HTMLAttributes<HTMLDivElement> & {
    type: WRITE_MODE;
};

const UserGroupForm: React.FC<UserGroupFormProps> = ({ className, type = 'CREATE', ...props }) => {
    const form = useForm<userGroupFormData>({
        resolver: zodResolver(userGroupSchema),
        defaultValues: {
            name: '',
        },
    });
    const { isPending, mutate } = useAddOrUpdateUserGroup({ type });

    const handleSubmit = (formData: z.infer<typeof userGroupSchema>) => {
        mutate({ name: formData.name, companyId: '65e2fd77518effe02e3c2cbd' });
    };

    return (
        <>
            <Card className="drop-shadow-lg">
                <CardHeader>
                    <CardTitle>
                        <CardTitle>{`${type === 'CREATE' ? 'Add New' : 'Edit'} User Group `}</CardTitle>
                        <CardDescription className="py-2">
                            <span className="p-regular-14">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </CardDescription>
                        <Separator />
                    </CardTitle>
                </CardHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)}>
                        <CardContent className="py-4">
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-5 ">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => {
                                            return (
                                                <FormItem>
                                                    <FormLabel>Group Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="group name" type="text" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            );
                                        }}
                                    />
                                </div>
                                <Separator />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <div className="gap-4 ml-auto flex-between">
                                <Button variant="destructive" className="gap-2 rounded-sm" type="button">
                                    <CircleBackslashIcon />
                                    Cancel
                                </Button>
                                <Button className="gap-2 rounded-sm" type="submit">
                                    <PlusCircledIcon />
                                    Add
                                </Button>
                            </div>
                        </CardFooter>
                    </form>
                </Form>
            </Card>
        </>
    );
};

export default UserGroupForm;
