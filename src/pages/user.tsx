import UserRole from '@/components/sidebar/form/userRole';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const User = () => {
  return (
    <Tabs defaultValue="account" className="w-full ">
      <div className="flex items-center justify-center my-4">
        <TabsList>
          <TabsTrigger value="user">Users</TabsTrigger>
          <TabsTrigger value="userGroup">Users Group</TabsTrigger>
          <TabsTrigger value="userRole">Users Role</TabsTrigger>
        </TabsList>
      </div>
      <div className="">
        <TabsContent value="user">Make changes to your account here.</TabsContent>
        <TabsContent value="userGroup">Change your password userGroup.</TabsContent>
        <TabsContent value="userRole">
          <UserRole />
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default User;
