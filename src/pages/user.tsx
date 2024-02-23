import UserRole from '@/components/form/userRole';
import NormalTable from '@/components/tables/TableColumn/Table';
import { user_role_column } from '@/components/tables/TableColumn/user-columns';
import { user_group_columns } from '@/components/tables/TableColumn/usergroup-column';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useUserFatchGroup, useUserFatchRole } from '@/service/queries';

const User = () => {
  const { data: userRole } = useUserFatchRole();
  const { data: userGroup } = useUserFatchGroup();

  return (
    <>
      <Tabs defaultValue="user" className="w-full ">
        <div className="flex items-center justify-center my-4">
          <TabsList>
            <TabsTrigger value="user">Users</TabsTrigger>
            <TabsTrigger value="userGroup">Users Group</TabsTrigger>
            <TabsTrigger value="userRole">Users Role</TabsTrigger>
          </TabsList>
        </div>
        <div className="">
          <TabsContent value="user">
            {/* {<PeopleDataTable columns={columns} data={people} />} */}
            {userRole && <NormalTable columns={user_role_column} data={userRole.data} />}
            {/* <DataTablePagination table={PeopleDataTable} /> */}
          </TabsContent>
          <TabsContent value="userGroup">
            {userGroup && <NormalTable columns={user_group_columns} data={userGroup.data} />}
          </TabsContent>
          <TabsContent value="userRole">
            <UserRole />
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
};

export default User;
