import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Sidebar, { SidebarItem } from '@/components/shared/Sidebar';
import { DashboardIcon, PersonIcon } from '@radix-ui/react-icons';

type HomeLayoutProps = {
  children: React.ReactNode;
};
const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem icon={<DashboardIcon className="size-5" />} name="Dashboard" href="/home" />
        <SidebarItem icon={<PersonIcon className="size-5 " />} name="User Management" href="/user-management" />
      </Sidebar>
      <div className="flex flex-col flex-1 h-screen">
        <Header />
        <main className="container flex-1 h-screen py-4">
          <div className="h-[3600px]">{children}</div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
