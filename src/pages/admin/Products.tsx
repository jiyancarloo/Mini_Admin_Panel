import { columns, type Product } from "../../components/productTable/columns";
import { DataTable } from "../../components/productTable/data-table";

const products: Product[] = [
  { id: 1, name: "Stethoscope", category: "Medical" },
  { id: 2, name: "Notebook", category: "School" },
  { id: 3, name: "Keyboard", category: "Electronics" },
  { id: 4, name: "Basketball", category: "Sports" },
  { id: 5, name: "Violin", category: "Music" },
  { id: 6, name: "Guitar", category: "Music" },
  { id: 7, name: "Drum", category: "Music" },
  { id: 8, name: "Flute", category: "Music" },
  { id: 9, name: "Tamborine", category: "Music" },
  { id: 10, name: "Laptop", category: "Electronics" },
  { id: 11, name: "Cellphone", category: "Electronics" },
  { id: 12, name: "Desktop", category: "Electronics" },
  { id: 13, name: "Ballpen", category: "School" },
];

export default function ProductPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold font-poppins">Products</h1>
      </div>

      <DataTable columns={columns} data={products} />
    </div>
  );
}
