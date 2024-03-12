import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useLogin } from '@/services/auth/auth.api.query';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@/context';
import { Checkbox } from '@/components/ui/checkbox';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);

    const formSchema = z.object({
        username: z.string().email(),
        password: z.string().min(8, 'Password must be at least 8 characters long'),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const { mutate, isSuccess, isError, data } = useLogin();

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        mutate({
            ...values,
            roleType: 'COMPANY_ADMIN',
        });
        setAuth((prev) => ({ ...prev, authenticated: true }));
        console.log(values);
    };

    const handlePassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col w-full max-w-md gap-2  mx-auto mb-0 mt-8  space-y-2">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="username" type="email" className="" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => {
                        return (
                            <div>
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                </FormItem>
                                <div className="relative">
                                    <Input placeholder="password" type={showPassword ? 'text' : 'password'} className="my-2" {...field} />
                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer" onClick={handlePassword}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <FormMessage />
                            </div>
                        );
                    }}
                />
                <div className="flex items-center space-x-2">
                    <Checkbox id="rememberMe" />
                    <label htmlFor="rememberMe" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Remember me
                    </label>
                </div>
                <Button type="submit" className="l text-white mt-5 ">
                    Submit
                </Button>
            </form>
        </Form>
    );
};

export default LoginForm;
