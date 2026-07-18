import { MobileDashboard } from "@/components/mobile/dashboard/MobileDashboard";

export default function DashboardPage() {
  return (
    <>
      <div className="md:hidden">
        <MobileDashboard />
      </div>
      <div className="hidden md:block">{/* desktop dashboard page */}</div>
    </>
  );
}
