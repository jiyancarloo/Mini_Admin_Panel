import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Plus, Edit } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const categories = [
  { id: 1, name: "Medical" },
  { id: 2, name: "School" },
  { id: 3, name: "Electronics" },
  { id: 4, name: "Music" },
  { id: 5, name: "Sports" },
];

export default function CategoryPage() {
  return (
    <div className="p-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold font-poppins">Category</h1>
      </div>
      <div className="text-right mb-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              className="font-poppins bg-slate-200 hover:bg-slate-400"
            >
              <Plus className="mr-2 h-4 w-4" />
              Category
            </Button>
          </TooltipTrigger>
          <TooltipContent className="font-poppins">Add Category</TooltipContent>
        </Tooltip>
      </div>

      <Card className="font-poppins">
        <CardHeader>
          <CardTitle className="text-lg">List of Categories</CardTitle>
          <p className="text-muted-foreground text-sm mb-2">
            Here are the list of Categories for each products
          </p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Category Name</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell>{category.id}</TableCell>
                  <TableCell>{category.name}</TableCell>
                  <TableCell className="text-right">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Edit />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="font-poppins">
                        Edit {category.name} Category
                      </TooltipContent>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
