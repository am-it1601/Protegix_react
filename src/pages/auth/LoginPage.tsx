import LoginForm from '@/components/form/loginForm';

const LoginPage = () => {
    return (
        <div className="flex h-[100vh]">
            <div className="flex-1 bg-black p-20   ">
                <div className="flex justify-between flex-col h-full">
                    <div className="">
                        <img src="https://img.logoipsum.com/330.svg" className="overflow-hidden transition-all w-32 h-32" alt="logo" />
                    </div>
                    <div>
                        <p className="text-white">
                            Acme Inc “This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.” Sofia Davis
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex-1 ">
                <div className=" max-w-screen-xl h-full w-full flex items-center justify-center flex-col px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-xl font-bold sm:text-xl">Login an account !</h1>

                        <p className="mt-4 text-gray-500">Enter your email and password below to login your account</p>
                    </div>

                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
