import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from './ui/button';

const filterValue = [
  { id: 1, name: 'Female' },
  { id: 2, name: 'Male' },
  { id: 3, name: 'Both' },
];

export function PoopOver({ setColumnFilters, columnFilters }: any) {
  const filterStatuses = columnFilters.find((f: any) => f.id === 'gender')?.value || [];

  // const handleCheckboxClick = (id: number) => {
  //   const updatedStatuses = filterStatuses.includes(id)
  //     ? filterStatuses.filter((status: number) => status !== id)
  //     : [...filterStatuses, id];
  //   setColumnFilters((prev: any[]) => {
  //     const existingIndex = prev.findIndex((filter) => filter.id === 'gender');
  //     if (existingIndex !== -1) {
  //       prev[existingIndex].value = updatedStatuses;
  //       return [...prev];
  //     } else {
  //       return [...prev, { id: 'gender', value: updatedStatuses }];
  //     }
  //   });
  // };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline" className="ml-4">
            Filter
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {filterValue.map((column, index) => {
            const checked = filterStatuses.includes(column.id); // Determine checked status
            return (
              <DropdownMenuCheckboxItem
                key={index}
                className="capitalize"
                checked={checked} // Use checked value here
                onClick={() =>
                  setColumnFilters((prev: any[]) => {
                    const statuses = prev.find((filter: any) => filter.id === 'gender')?.value;
                    if (!statuses) {
                      return prev.concat({
                        id: 'gender',
                        value: [column.id],
                      });
                    }

                    return prev.map((f: any) =>
                      f.id === 'gender'
                        ? {
                            ...f,
                            value: checked ? statuses.filter((s: any) => s !== column.id) : statuses.concat(column.id),
                          }
                        : f
                    );
                  })
                }>
                {column.name}
              </DropdownMenuCheckboxItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
