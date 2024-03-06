import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import NormalTable from '@/TableColumn/Table';
import { user_columns } from '@/TableColumn/user-columns';
import { useDataTable } from '@/hooks/use-data-table';
import { useUserGroup } from '@/services/user-group/user.group.query';
import UserRoles from './user_role';
import UserList from './users';
import { useEffect, useState } from 'react';
import Pagination from '@/components/pagination/pagination';

const UserManagement = () => {
  const navigate = useNavigate();
  const [paginationSta, setPagination] = useState({ page: 1, limit: 20 });

  const { data: userData, isLoading, isError } = useUserGroup(paginationSta);

  const { table } = useDataTable({
    data: userData?.content ?? [],
    columns: user_columns,
    pageData: userData?.pageData ?? {},
  });

  //   useEffect(() => {
  //     const pageIndex = table.getState().pagination.pageIndex;
  //     setPagination((prev) => ({ ...prev, page: pageIndex + 2 }));
  //   }, [table.getState().pagination.pageIndex]);

  console.log(table.getState().pagination.pageIndex + 1);
  console.log({ paginationSta });

  return (
    <Tabs defaultValue="users" className="flex flex-col ">
      <TabsList className="flex flex-1 w-full gap-0 rounded-none">
        <TabsTrigger value="users" className="w-full p-3  rounded-none  border-b data-[state=active]:border-primary ">
          Users
        </TabsTrigger>
        <TabsTrigger className="w-full p-3  rounded-none  border-b data-[state=active]:border-primary " value="groups">
          User Groups
        </TabsTrigger>
        <TabsTrigger className="w-full p-3  rounded-none  border-b data-[state=active]:border-primary " value="roles">
          User Roles
        </TabsTrigger>
      </TabsList>
      <TabsContent value="users">
        <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>Make changes to your account here. Click save when you're done.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <UserList />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="groups">
        <Card>
          <CardHeader>
            <CardTitle>User Group</CardTitle>
            <div className="flex-between">
              <CardDescription>Change your password here. After saving, you'll be logged out.</CardDescription>
              <Button size={'sm'} variant="default" onClick={() => navigate('./user-group/create')}>
                Add New Group
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* <UserGroupList /> */}
            {userData?.content && <NormalTable columns={user_columns} data={userData?.content} table={table} />}
            {userData?.content && <Pagination table={table} pageData={userData?.pageData} />}
          </CardContent>
        </Card>
        {/* <div className="my-5">{data && <NormalTable columns={user_columns} data={data} />}</div> */}
      </TabsContent>
      <TabsContent value="roles">
        <Card>
          <CardHeader>
            <CardTitle>User Roles</CardTitle>

            <div className="flex-between">
              <CardDescription>Change your password here. After saving, you'll be logged out.</CardDescription>
              <Button size={'sm'} variant="default" onClick={() => navigate('./role/create')}>
                Add New Role
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex flex-1 space-y-2">
            <UserRoles />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default UserManagement;
