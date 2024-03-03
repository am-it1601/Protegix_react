import React from 'react';

import SelectRoleType from '@/components/dropdowns/SelectRoleType';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ROLE_TYPE } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { CircleBackslashIcon, PlusCircledIcon, PlusIcon } from '@radix-ui/react-icons';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@radix-ui/react-select';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement> & {};
const UserRoleForm: React.FC<UserAuthFormProps> = ({ className, ...props }) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const onSubmit = (e: React.SyntheticEvent) => {
        alert('Submit !');
    };

    return (
        <Card className="drop-shadow-lg">
            <CardHeader>
                <CardTitle>
                    <CardTitle>Add New User Role</CardTitle>
                    <CardDescription>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</CardDescription>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className={cn('gap-6 p-4', className)} {...props}>
                    <form onSubmit={onsubmit}>
                        <div className="flex-col gap-4 flex-between "></div>
                        <div className="grid grid-cols-3">
                            <div className="grid gap-3">
                                <Label htmlFor="name">Role:</Label>
                                <Input id="name" placeholder="Role name" type="text" autoCapitalize="none" autoCorrect="off" disabled={isLoading} className="rounded" />
                            </div>

                            <div className="grid col-start-3 gap-3">
                                <div className="flex">
                                    <Select>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Select a fruit" />
                                        </SelectTrigger>

                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Fruits</SelectLabel>
                                                <SelectItem value="apple">Apple</SelectItem>
                                                <SelectItem value="banana">Banana</SelectItem>
                                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                                <SelectItem value="grapes">Grapes</SelectItem>
                                                <SelectItem value="pineapple">Pineapple</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            {/* <div className="gap-4 ">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Role:</Label>
                                    <Input id="name" placeholder="Role name" type="text" autoCapitalize="none" autoCorrect="off" disabled={isLoading} className="rounded" />
                                </div>
                                <div className="grid w-full gap-2">
                                    <Label htmlFor="roleType">Role Type:</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Role Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Object.entries(ROLE_TYPE).map((e, index) => (
                                                <SelectItem key={index} value={e[0]}>
                                                    {e[1]}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div> */}
                        </div>
                        <Separator className="my-4" />
                    </form>
                </div>
            </CardContent>
            <CardFooter>
                <div className="gap-4 ml-auto flex-between">
                    <Button variant="destructive" className="gap-2 rounded-sm">
                        <CircleBackslashIcon />
                        Cancel
                    </Button>
                    <Button className="gap-2 rounded-sm">
                        <PlusCircledIcon />
                        Add
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
};

export default UserRoleForm;
