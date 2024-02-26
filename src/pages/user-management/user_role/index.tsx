import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react';

const UserRoles = () => {
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
        <TableRow>
          <TableCell className="font-medium">Company Admin</TableCell>
          <TableCell className="text-right">20</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Company User</TableCell>
          <TableCell className="text-right">10</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default UserRoles;
