import { PoopOver } from './filterPoop';
import { Input } from './ui/input';

const Filters = ({ setColumnFilters, columnFilters }: any) => {
  const taskName = columnFilters.find((f: { id: string }) => f.id === 'first_name')?.value || '';

  const onFilterChange = (id: string, value: string) =>
    setColumnFilters((prev: any[]) =>
      prev
        .filter((f: { id: any }) => f.id !== id)
        .concat({
          id,
          value,
        })
    );
  return (
    <div className="flex gap-2">
      <Input
        placeholder="Filter First names"
        className="max-w-sm"
        value={taskName}
        type="search"
        onChange={(e) => onFilterChange('first_name', e.target.value)}
      />
      <PoopOver columnFilters={columnFilters} setColumnFilters={setColumnFilters} />
    </div>
  );
};

export default Filters;
