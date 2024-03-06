import { Navigate, Outlet, Route } from 'react-router-dom';

import { useContext } from 'react';

import { AuthenticationContext } from '@/context';
import HomeLayout from '@/pages/layouts/HomeLayout';

const PrivateRoutes = () => {
    const { authenticated } = useContext(AuthenticationContext);
    console.log(authenticated);
    return authenticated ? (
        <HomeLayout>
            <Outlet />
        </HomeLayout>
    ) : (
        <Navigate to="/login" />
    );
};

export default PrivateRoutes;
