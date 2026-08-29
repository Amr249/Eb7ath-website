"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, GraduationCap, LogOut, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin", label: "المقالات", icon: FileText, match: (pathname) => pathname === "/admin" || pathname.startsWith("/admin/articles") },
  { href: "/admin/experts", label: "الخبراء", icon: GraduationCap, match: (pathname) => pathname.startsWith("/admin/experts") },
  { href: "/admin/research", label: "الأبحاث", icon: Microscope, match: (pathname) => pathname.startsWith("/admin/research") },
];

export function AdminSidebar() {
  const pathname = usePathname();

  async function logout() {
    await fetch("/api/admin/auth/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  return (
    <aside className="hidden w-64 shrink-0 border-s border-zinc-800 bg-zinc-950 text-zinc-100 md:flex md:flex-col">
      <div className="flex h-16 items-center border-b border-zinc-800 px-6">
        <div>
          <p className="text-xs tracking-[0.2em] text-zinc-400">إِبحَث</p>
          <p className="text-lg font-semibold">لوحة الإدارة</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = item.match ? item.match(pathname) : pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                active ? "bg-zinc-800 text-white" : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4">
        <Separator className="mb-4 bg-zinc-800" />
        <Button variant="ghost" className="w-full justify-start gap-2 text-zinc-300 hover:bg-zinc-900 hover:text-white" onClick={logout}>
          تسجيل الخروج
          <LogOut className="h-4 w-4" />
        </Button>
      </div>
    </aside>
  );
}
