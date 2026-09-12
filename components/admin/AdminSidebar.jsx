"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, FileText, GraduationCap, Microscope, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IMAGES, SITE_NAME } from "@/lib/assets";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin", label: "المقالات", icon: FileText, match: (pathname) => pathname === "/admin" || pathname.startsWith("/admin/articles") },
  { href: "/admin/experts", label: "الخبراء", icon: GraduationCap, match: (pathname) => pathname.startsWith("/admin/experts") },
  {
    href: "/admin/institution-experts",
    label: "خبراء المؤسسة",
    icon: Users,
    match: (pathname) => pathname.startsWith("/admin/institution-experts"),
  },
  { href: "/admin/research", label: "الأبحاث", icon: Microscope, match: (pathname) => pathname.startsWith("/admin/research") },
];

export function AdminSidebar() {
  const pathname = usePathname();

  async function logout() {
    await fetch("/api/admin/auth/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 self-start overflow-hidden border-s border-zinc-800 bg-zinc-950 text-zinc-100 md:flex md:flex-col">
      <div className="flex flex-col gap-3 border-b border-zinc-800 px-6 py-5">
        <Link href="/admin" className="block">
          <img
            src={IMAGES.logoHeaderAr}
            alt={SITE_NAME}
            className="h-11 w-auto max-w-full object-contain brightness-0 invert"
          />
        </Link>
        <p className="text-sm font-medium text-zinc-400">لوحة الإدارة</p>
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
        <Button
          type="button"
          className="h-11 w-full justify-center gap-2 rounded-xl bg-zinc-100 text-zinc-900 hover:bg-white hover:text-zinc-900"
          onClick={logout}
        >
          تسجيل الخروج
          <ArrowRight className="h-4 w-4 rtl:rotate-180" />
        </Button>
      </div>
    </aside>
  );
}
