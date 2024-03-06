import React from 'react';
import SkeletonTable from '@/components/skeleton/SkeletonTable';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useUserRole } from '@/services/user-role/user.role.query';

import { UserRoleType } from 'types';

const UserRoleTable = () => {
    const { data, isLoading } = useUserRole();
    console.log(data);
    if (isLoading) return <SkeletonTable columnCount={2} rowCount={10} />;
    return (
        <Table>
            <TableCaption>A list of your recent User Groups.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>User Group</TableHead>
                    <TableHead className="text-right">Number of Users</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.content?.map((u: UserRoleType) => (
                    <TableRow>
                        <TableCell className="font-medium">{u.name}</TableCell>
                        <TableCell className="text-right">{u.numberOfUser}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default UserRoleTable;
