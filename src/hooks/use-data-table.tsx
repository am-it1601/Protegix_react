import { ColumnDef, getCoreRowModel, getPaginationRowModel, useReactTable, type PaginationState, type VisibilityState } from '@tanstack/react-table';
import React, { useState } from 'react';

interface UseDataTableProps<TData, TValue> {
  data?: TData[];
  columns: ColumnDef<TData, TValue>[];
  pageData: any;
}
export function useDataTable<TData, TValue>({ data = [], columns, pageData }: UseDataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: pageData.page - 1 || 0,
    pageSize: 20,
  });

  // const pagination = React.useMemo(
  //   () => ({
  //     pageIndex,
  //     pageSize,
  //   }),
  //   [pageIndex, pageSize]
  // );

  React.useEffect(() => {
    setPagination({
      pageIndex: pageData.page - 1 || 0,
      pageSize: pageData.itemsPerPage,
    });
  }, [pageData.page, pageData.itemsPerPage]);

  const table = useReactTable({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,

    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,

    state: {
      pagination,
      columnVisibility,
      rowSelection,
    },
  });

  return { table };
}
