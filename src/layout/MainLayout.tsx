// src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen max-w-full mx-auto px-4 py-8 bg-slate-100 flex items-center justify-center">
      <Outlet />
    </div>
  );
}
