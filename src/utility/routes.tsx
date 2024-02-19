import { Outlet } from 'react-router-dom';

import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import Home from '@/pages/Home';
import PageNoteFound from '@/pages/pageNoteFound';

export const Layout = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-full px-5">
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
        path: 'about',
        element: <div>about</div>,
      },
    ],
  },
  {
    path: 'login',
    element: <span>Login</span>,
  },
];

export default routes;
