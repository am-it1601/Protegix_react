import { Watch } from 'react-loader-spinner';
import { useLocation, useNavigate } from 'react-router-dom';

import LoginForm from '@/components/features/auth/LoginForm';
import { useAuthentication } from '@/hooks';

const renderLogin = (redirectUrl: string) => {
    return (
        <>
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="h5-bold">Login an account !</h1>
                <p className="text-sm text-muted-foreground">Enter your email below to create your account</p>
            </div>

            <LoginForm redirectUrl={redirectUrl} className="w-full" />
        </>
    );
};
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
    return (
        <div className="flex h-[100vh]">
            <div className="flex-1 bg-login-screen relative">
                <div>
                    <img src="https://img.logoipsum.com/330.svg" className="overflow-hidden transition-all w-32 h-32" alt="logo" />
                </div>
                <div id="overlay" className="w-full h-full absolute login-overlay top-0 left-0 opacity-30" />
                {/* <div className="relative object-cover w-full h-full">
                    <img src="/login.webp" className="overflow-hidden transition-all" alt="logo" />
                </div> */}
                {/* <div>
                    <p className="text-white">
                        Acme Inc “This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.” Sofia Davis
                    </p>
                </div> */}
            </div>

            <div className="flex-1">
                <div className="h-full mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[480px]">
                    {session ? <Watch visible={true} height="80" width="80" radius="48" color="#4fa94d" ariaLabel="watch-loading" /> : renderLogin(redirect)}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
