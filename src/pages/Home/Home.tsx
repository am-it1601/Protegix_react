import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

import Sidebar, { SidebarItem } from '@/components/shared/Sidebar';
import { PersonIcon } from '@radix-ui/react-icons';

const Home = () => {
    return (
        <div className="flex">
            <Sidebar>
                <SidebarItem
                    icon={<PersonIcon className="size-5" />}
                    name="User Management"
                    active
                />
                <SidebarItem
                    icon={<PersonIcon className="size-5 " />}
                    name="User Management"
                    active={false}
                />
            </Sidebar>
            <div className="flex flex-col flex-1 h-screen">
                <Header />
                <main className="container flex-1 h-screen py-4 ">
                    <div className="h-full bg-primary">
                        <h1>content</h1>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
