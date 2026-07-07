export const metadata = {
  title: "لوحة إدارة إِبحَث",
};

export default function AdminRootLayout({ children }) {
  return (
    <div id="admin-root" className="min-h-screen bg-background text-foreground" dir="rtl" lang="ar">
      {children}
    </div>
  );
}
