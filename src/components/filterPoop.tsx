import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

// interface DataTableFacetedFilter<TData, TValue> {
//   column?: Column<TData, TValue>;
//   title?: string;
//   options: any[];
//   variant?: 'popover' | 'command';
// }
export const STATUSES = ['STATUS_ON_DECK', 'STATUS_IN_PROGRESS', 'STATUS_TESTING', 'STATUS_DEPLOYED'];

export function PoopOver({ setColumnFilters, columnFilters }: any) {
  return (
    <Popover>
      <PopoverTrigger>Filter</PopoverTrigger>
      <PopoverContent
        onClick={() => {
          setColumnFilters([{ id: 'gender', value: 'Female' }]);
        }}>
        Female
      </PopoverContent>
      {/* <PopoverContent
        onClick={() => {
          setColumnFilters([{ id: 'gender', value: 'Male' }]);
        }}>
        Male
      </PopoverContent> */}
    </Popover>
  );
}
