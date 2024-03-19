import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SelectSeparator } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { LockClosedIcon, SymbolIcon } from '@radix-ui/react-icons';

import { useLoginForm } from './hooks';

type LoginFormProps = {
    redirectUrl: string;
    showForgotPassword: boolean;
    showRememberMe: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
const LoginForm: React.FC<LoginFormProps> = ({ className, redirectUrl, showForgotPassword = false, showRememberMe = false, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    const { submit, form, isPending } = useLoginForm({ redirectUrl: redirectUrl || '/home' });

    return (
        <div className={cn('grid gap-6', className)} {...props}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(submit)} className="flex flex-col w-full gap-2  mx-auto mb-0 mt-8  space-y-2">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Username or Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="username" className="input-field" {...field} />
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
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input placeholder="password" type={showPassword ? 'text' : 'password'} className="input-field" {...field} />
                                            <span
                                                className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer"
                                                onClick={() => {
                                                    setShowPassword((prev) => !prev);
                                                }}>
                                                {showPassword ? <Eye className="w-4 h-4 text-gray-500" /> : <EyeOff className="w-4 h-4 text-gray-500" />}
                                            </span>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                    <div className="flex justify-between py-2 px-1">
                        {showRememberMe && (
                            <FormField
                                control={form.control}
                                name="rememberMe"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 self-end">
                                            <FormControl>
                                                <Checkbox id="rememberMe" checked={field.value} onCheckedChange={field.onChange} className="w-5 h-5" />
                                            </FormControl>
                                            <FormLabel className="p-regular-12">Remember me ?</FormLabel>
                                        </FormItem>
                                    );
                                }}
                            />
                        )}
                        {showForgotPassword && (
                            <Link to="/forgot-password" className="p-regular-12 text-primary">
                                Forgot Password ?
                            </Link>
                        )}
                    </div>
                    <SelectSeparator className="bg-input my-5" />
                    <Button type="submit" disabled={isPending || (form.formState.isDirty && !form.formState.isValid)}>
                        {!isPending ? <LockClosedIcon className="mr-2 h-4 w-4" /> : <SymbolIcon className="mr-2 h-4 w-4 animate-spin" />}
                        {!isPending ? 'Login to Continue' : 'Please Wait...'}
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default LoginForm;
