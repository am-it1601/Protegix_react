import { Watch } from 'react-loader-spinner';
import { useLocation, useNavigate } from 'react-router-dom';

import LoginForm from '@/components/features/auth/LoginForm';
import { useAuthentication } from '@/hooks';

const LoginPage = () => {
    let session = false;
    const { isAuthenticated } = useAuthentication();
    const navigate = useNavigate();
    const { state: locationState } = useLocation();
    const redirect = locationState?.redirectTo || '/home';
    console.log(redirect);
    if (isAuthenticated) {
        console.log('redirecting');
        session = true;
        setTimeout(() => {
            navigate(redirect);
        }, 1000);
    }
    if (session) {
        return <Watch visible={true} height="80" width="80" radius="48" color="#4fa94d" ariaLabel="watch-loading" />;
    }
    return (
        <>
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="h5-bold">Login an account !</h1>
                <p className="text-sm text-muted-foreground">Enter your email below to create your account</p>
            </div>

            <LoginForm redirectUrl={redirect} className="w-full" showRememberMe showForgotPassword />
        </>
    );
};

export default LoginPage;
