import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type Product = {
  id: number;
  name: string;
  category: string;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Product Name",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({}) => {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="sm">
              <Edit className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="font-poppins">Edit</TooltipContent>
        </Tooltip>
      );
    },
  },
];
