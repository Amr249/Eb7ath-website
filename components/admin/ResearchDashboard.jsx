"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Plus, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { researchStatusLabels, researchStatusVariant } from "@/lib/cms/researchForm";

export function ResearchDashboard() {
  const [items, setItems] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const stats = useMemo(() => {
    const published = items.filter((item) => item.status === "published").length;
    return {
      total: items.length,
      published,
      drafts: items.filter((item) => item.status === "draft").length,
      teamMembers: items.reduce((sum, item) => sum + (item.teamCount ?? 0), 0),
    };
  }, [items]);

  async function loadResearch() {
    setRefreshing(true);
    const res = await fetch("/api/admin/research");
    const data = await res.json();
    setItems(data.items || []);
    setRefreshing(false);
  }

  useEffect(() => {
    loadResearch();
  }, []);

  async function remove(id) {
    if (!window.confirm("هل تريد حذف هذا البحث؟")) return;
    await fetch(`/api/admin/research/${id}`, { method: "DELETE" });
    loadResearch();
  }

  async function publish(id) {
    await fetch(`/api/admin/research/${id}/publish`, { method: "POST" });
    loadResearch();
  }

  return (
    <>
      <header className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
        <div className="flex h-16 items-center justify-between px-6">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">الأبحاث</h1>
            <p className="text-sm text-muted-foreground">إدارة المنشورات العلمية وفريق الباحثين</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={loadResearch} disabled={refreshing}>
              تحديث
              <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
            </Button>
            <Button size="sm" asChild>
              <Link href="/admin/research/new">
                بحث جديد
                <Plus className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 space-y-6 p-6">
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>إجمالي الأبحاث</CardDescription>
              <CardTitle className="text-3xl">{stats.total}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>المنشورة</CardDescription>
              <CardTitle className="text-3xl text-emerald-600">{stats.published}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>المسودات</CardDescription>
              <CardTitle className="text-3xl text-amber-600">{stats.drafts}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>أعضاء الفريق</CardDescription>
              <CardTitle className="text-3xl text-sky-600">{stats.teamMembers}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>كل الأبحاث</CardTitle>
            <CardDescription>اربط كل بحث بخبير وأضف فريق الباحثين والروابط الخارجية.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>العنوان</TableHead>
                  <TableHead>الخبير</TableHead>
                  <TableHead>المجلة</TableHead>
                  <TableHead>الحالة</TableHead>
                  <TableHead>الفريق</TableHead>
                  <TableHead className="text-start">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="py-10 text-center text-muted-foreground">
                      لا توجد أبحاث بعد.{" "}
                      <Link href="/admin/research/new" className="font-medium text-foreground underline-offset-4 hover:underline">
                        أضف أول بحث
                      </Link>
                    </TableCell>
                  </TableRow>
                ) : (
                  items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div className="max-w-xs font-medium line-clamp-2" lang="en" dir="ltr">
                          {item.title}
                        </div>
                        <div className="text-xs text-muted-foreground">{item.slug}</div>
                      </TableCell>
                      <TableCell>{item.expertName || "—"}</TableCell>
                      <TableCell>{item.journal}</TableCell>
                      <TableCell>
                        <Badge variant={researchStatusVariant(item.status)}>
                          {researchStatusLabels[item.status] || item.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{item.teamCount ?? 0}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/admin/research/${item.id}/edit`}>تعديل</Link>
                          </Button>
                          {item.status !== "published" ? (
                            <Button variant="secondary" size="sm" onClick={() => publish(item.id)}>
                              نشر
                            </Button>
                          ) : null}
                          <Button variant="destructive" size="sm" onClick={() => remove(item.id)}>
                            حذف
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
