import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

import { Person } from '@/assets/people';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const columns: ColumnDef<Person>[] = [
  {
    id: 'select',
    header: ({ table }) => {
      return (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value: any) => {
            table.toggleAllPageRowsSelected(!!value);
          }}
        />
      );
    },
    cell: ({ row }) => {
      return (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value: any) => {
            row.toggleSelected(!!value);
          }}
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === 'asc');
          }}>
          User ID
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    accessorKey: 'id',
  },
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === 'asc');
          }}>
          First Name
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    accessorKey: 'first_name',
  },
  {
    header: 'Last Name',
    accessorKey: 'last_name',
  },
  {
    header: 'Email',
    accessorKey: 'email',
  },
  {
    header: 'Gender',
    accessorKey: 'gender',
  },
  {
    header: 'Date of Birth',
    accessorKey: 'date_of_birth',
    cell: ({ row }) => {
      const date_of_birth = row.getValue('date_of_birth');
      const formatted = new Date(date_of_birth as string).toLocaleDateString();
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const person = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(person.first_name.toString());
              }}>
              Copy person name
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
