"use client";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { userColumns } from "./user-columns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

const UsersTable = ({ userData }) => {
  const columns = userColumns;
  const data = userData;

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <section className="my-5">
      <div className="mx-auto h-full w-[90%] rounded-lg border">
        <ScrollArea className="h-[65vh]">
          <Table>
            {/* //! Header */}
            <TableHeader>
              {table.getHeaderGroups().map((headergroup) => (
                <TableRow key={headergroup.id}>
                  {headergroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {flexRender(header.column.columnDef.header)}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            {/* //! Rows */}
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </section>
  );
};

export default UsersTable;