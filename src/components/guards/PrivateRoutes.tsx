import { AuthContext } from '@/context';
import HomeLayout from '@/pages/layouts/HomeLayout';
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const { auth } = useContext(AuthContext);
    console.log(auth);

    return auth.authenticated ? (
        <HomeLayout>
            <Outlet />
        </HomeLayout>
    ) : (
        <Navigate to="/login" />
    );
};

export default PrivateRoutes;
