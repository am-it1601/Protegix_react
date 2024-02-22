import { people } from '@/assets/people';
import UserRole from '@/components/form/userRole';
import { columns } from '@/components/tables/people/columns';
import PeopleDataTable from '@/components/tables/people/data-table';
// import { DataTablePagination } from '@/components/tables/people/data-table-pagination';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const User = () => {
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
            <PeopleDataTable columns={columns} data={people} />
            {/* <DataTablePagination table={PeopleDataTable} /> */}
          </TabsContent>
          <TabsContent value="userGroup">Change your password userGroup.</TabsContent>
          <TabsContent value="userRole">
            <UserRole />
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
};

export default User;
