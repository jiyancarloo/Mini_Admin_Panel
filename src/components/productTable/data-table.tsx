// components/ui/data-table.tsx
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [filter, setFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter: filter,
    },
    onGlobalFilterChange: setFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <Input
          placeholder="Search products..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="max-w-sm font-poppins"
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              className="bg-slate-200 hover:bg-slate-400 font-poppins"
            >
              <Plus className="mr-2 h-4 w-4" /> Product
            </Button>
          </TooltipTrigger>
          <TooltipContent className="font-poppins">Add Product</TooltipContent>
        </Tooltip>
      </div>
      <Card className="font-poppins">
        <CardHeader>
          <CardTitle className="text-lg">List of Products</CardTitle>
          <p className="text-muted-foreground text-sm mb-2">
            Below here each product has its own corresponding category
          </p>
        </CardHeader>
        <CardContent>
          <table className="w-full ">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="px-4 py-2 text-center">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="border-t">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-4 py-2 text-center">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
      <div className="flex items-center justify-end space-x-2 ">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
