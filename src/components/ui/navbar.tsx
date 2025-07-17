import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-slate-700 text-white px-4 py-6 flex items-center justify-between font-poppins">
      <div className="text-xl font-semibold ">Stock Panel</div>
      <div className="flex space-x-8">
        <Button asChild variant="link">
          <Link to="/admin/dashboard" className="text-white ">
            Dashboard
          </Link>
        </Button>
        <Button asChild variant="link">
          <Link to="/admin/products" className="text-white">
            Products
          </Link>
        </Button>
        <Button asChild variant="link">
          <Link to="/admin/category" className="text-white">
            Category
          </Link>
        </Button>
        <Button asChild variant="outline" className="text-white bg-slate-600">
          <Link to="/login" className="text-white">
            <LogOut className="w-4 h-4" />
            Logout
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
