import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-zinc-50">
      <AdminSidebar />
      <div className="flex min-w-0 flex-1 flex-col">{children}</div>
    </div>
  );
}
