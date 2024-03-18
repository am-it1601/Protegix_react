import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Skeleton } from '../ui/skeleton';
import _ from 'lodash';

type SkeletonTableProps = {
    rowCount: number;
    columnCount: number;
};
const SkeletonTable: React.FC<SkeletonTableProps> = ({ rowCount, columnCount, ...rest }) => {
    return (
        <Table>
            <TableCaption>Loading Data...</TableCaption>
            <TableHeader>
                <TableRow>
                    {_.times(columnCount, () => (
                        <TableHead className="text-right">
                            <Skeleton className="w-full h-6" />
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {_.times(rowCount, () => (
                    <TableRow>
                        {_.times(columnCount, () => (
                            <TableHead className="text-right">
                                <Skeleton className="w-full h-6" />
                            </TableHead>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default SkeletonTable;
