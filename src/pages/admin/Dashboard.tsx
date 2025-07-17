import { SectionCards } from "@/components/dashboard/section-cards";
import DashChart from "@/components/dashboard/bar-chart";
import DashLine from "@/components/dashboard/line-chart";

export default function Dashboard() {
  return (
    <div className="space-y-6 px-4 py-4">
      <h1 className="text-2xl font-bold font-poppins">Dashboard</h1>
      <SectionCards />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <DashChart />
        <DashLine />
      </div>
    </div>
  );
}
