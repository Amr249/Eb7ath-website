"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Plus, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { expertStatusLabels, expertStatusVariant } from "@/lib/cms/expertForm";

export function ExpertsDashboard() {
  const [items, setItems] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [deleteError, setDeleteError] = useState("");

  const stats = useMemo(() => {
    const published = items.filter((item) => item.status === "published").length;
    const featured = items.filter((item) => item.featuredOnLanding).length;
    return {
      total: items.length,
      published,
      featured,
      drafts: items.filter((item) => item.status === "draft").length,
    };
  }, [items]);

  async function loadExperts() {
    setRefreshing(true);
    setDeleteError("");
    const res = await fetch("/api/admin/experts");
    const data = await res.json();
    setItems(data.items || []);
    setRefreshing(false);
  }

  useEffect(() => {
    loadExperts();
  }, []);

  async function remove(id) {
    if (!window.confirm("هل تريد حذف هذا الخبير؟")) return;
    setDeleteError("");
    const res = await fetch(`/api/admin/experts/${id}`, { method: "DELETE" });
    if (!res.ok) {
      const data = await res.json();
      setDeleteError(data.error || "تعذّر حذف الخبير.");
      return;
    }
    loadExperts();
  }

  async function publish(id) {
    await fetch(`/api/admin/experts/${id}/publish`, { method: "POST" });
    loadExperts();
  }

  return (
    <>
      <header className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
        <div className="flex h-16 items-center justify-between px-6">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">الخبراء</h1>
            <p className="text-sm text-muted-foreground">إدارة ملفات الأساتذة والخبراء في الموقع</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={loadExperts} disabled={refreshing}>
              تحديث
              <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
            </Button>
            <Button size="sm" asChild>
              <Link href="/admin/experts/new">
                خبير جديد
                <Plus className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 space-y-6 p-6">
        {deleteError ? (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{deleteError}</div>
        ) : null}

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>إجمالي الخبراء</CardDescription>
              <CardTitle className="text-3xl">{stats.total}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>المنشورون</CardDescription>
              <CardTitle className="text-3xl text-emerald-600">{stats.published}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>في الصفحة الرئيسية</CardDescription>
              <CardTitle className="text-3xl text-sky-600">{stats.featured}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>المسودات</CardDescription>
              <CardTitle className="text-3xl text-amber-600">{stats.drafts}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>كل الخبراء</CardTitle>
            <CardDescription>أضف خبراء جدد أو عدّل بياناتهم بالعربية والإنجليزية.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>الاسم</TableHead>
                  <TableHead>الحالة</TableHead>
                  <TableHead>الأبحاث</TableHead>
                  <TableHead>الترتيب</TableHead>
                  <TableHead className="text-start">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="py-10 text-center text-muted-foreground">
                      لا يوجد خبراء بعد.{" "}
                      <Link href="/admin/experts/new" className="font-medium text-foreground underline-offset-4 hover:underline">
                        أضف أول خبير
                      </Link>
                    </TableCell>
                  </TableRow>
                ) : (
                  items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          {item.imageUrl ? (
                            <img src={item.imageUrl} alt="" className="h-10 w-10 rounded-full object-cover" />
                          ) : (
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-xs text-zinc-500">
                              —
                            </div>
                          )}
                          <div>
                            <div className="font-medium">
                              {item.locales?.ar?.name || item.locales?.en?.name || "بدون اسم"}
                            </div>
                            <div className="text-xs text-muted-foreground">{item.slug}</div>
                            {item.featuredOnLanding ? (
                              <Badge variant="info" className="mt-1">
                                في الرئيسية
                              </Badge>
                            ) : null}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={expertStatusVariant(item.status)}>
                          {expertStatusLabels[item.status] || item.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{item.researchCount ?? 0}</TableCell>
                      <TableCell>{item.sortOrder ?? 0}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/admin/experts/${item.id}/edit`}>تعديل</Link>
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
