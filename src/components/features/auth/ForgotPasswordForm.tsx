import { Send, Undo2 } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SelectSeparator } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { SymbolIcon } from '@radix-ui/react-icons';

import { useForgotPasswordForm } from './hooks';

type ForgotPasswordFormProps = React.HTMLAttributes<HTMLDivElement>;

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ className, ...props }) => {
    const { submit, form, isPending } = useForgotPasswordForm();
    const navigate = useNavigate();

    return (
        <div className={cn('grid gap-6', className)} {...props}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(submit)} className="flex flex-col w-full gap-2  mx-auto mb-0 mt-8  space-y-2">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Email" className="input-field" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                    <SelectSeparator className="bg-input my-5" />
                    <div className="flex justify-between items-center gap-4" onClick={() => navigate(-1)}>
                        <Button type="button" variant="destructive" className="w-full">
                            <Undo2 className="mr-2 w-4 h-4" />
                            Back
                        </Button>
                        <Button type="submit" className="w-full" disabled={isPending || (form.formState.isDirty && !form.formState.isValid)}>
                            {!isPending ? <Send className="mr-2 h-4 w-4" /> : <SymbolIcon className="mr-2 h-4 w-4 animate-spin" />}
                            {!isPending ? 'Send Reset Instructions' : 'Please Wait...'}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default ForgotPasswordForm;
