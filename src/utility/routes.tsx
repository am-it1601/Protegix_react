import { Outlet } from 'react-router-dom';

import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import Home from '@/pages/Home';
import PageNoteFound from '@/pages/pageNoteFound';
import User from '@/pages/user';

export const Layout = () => {
  return (
    <div>
      <div className="flex h-[100vh]  ">
        <Sidebar />
        <div className="flex flex-col w-full h-full ">
          <div className="text-center ">
            <Navbar />
          </div>
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
      {/* <div>footer</div> */}
    </div>
  );
};
const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <PageNoteFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'users',
        element: <User />,
      },
    ],
  },
  {
    path: 'login',
    element: <span>Login</span>,
  },
];

export default routes;
