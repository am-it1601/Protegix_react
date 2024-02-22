import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const formSchema = z
  .object({
    name: z.string().min(3),
    roleType: z.enum(['personal', 'company']),
    // companyName: z.string().optional(),
  })

  .refine(
    (data) => {
      if (data.roleType === 'company') {
        return !!data.roleType;
      }
      return true;
    },
    {
      message: 'Company name is required',
      path: ['companyName'],
    }
  );

export default function UserRole() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      // companyName: '',
    },
  });

  // const roleType = form.watch('roleType');

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.info({ values });
  };

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col w-full max-w-md gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="user name" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="roleType"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Role type</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an role type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="personal">Personal</SelectItem>
                      <SelectItem value="company">Company</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          {/* {roleType === 'company' && (
            <FormField
              control={form.control}
              name="roleType"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Company name</FormLabel>
                    <FormControl>
                      <Input placeholder="Company name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          )} */}

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </main>
  );
}
