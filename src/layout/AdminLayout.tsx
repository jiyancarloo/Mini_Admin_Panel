import { Outlet } from "react-router-dom";
import Navbar from "@/components/ui/navbar";

export default function AdminLayout() {
  return (
    <div className="min-h-screen max-w-full mx-auto bg-slate-100">
      <Navbar />
      <div className="px-4 mt-4 justify-center">
        <Outlet />
      </div>
    </div>
  );
}
