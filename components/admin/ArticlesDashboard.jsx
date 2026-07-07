"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Plus, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { statusLabels, statusVariant } from "@/lib/cms/articleForm";

export function ArticlesDashboard() {
  const [items, setItems] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const stats = useMemo(() => {
    const published = items.filter((item) => item.status === "published").length;
    return {
      total: items.length,
      published,
      drafts: items.length - published,
    };
  }, [items]);

  async function loadArticles() {
    setRefreshing(true);
    const res = await fetch("/api/admin/articles");
    const data = await res.json();
    setItems(data.items || []);
    setRefreshing(false);
  }

  useEffect(() => {
    loadArticles();
  }, []);

  async function remove(id) {
    if (!window.confirm("هل تريد حذف هذا المقال؟")) return;
    await fetch(`/api/admin/articles/${id}`, { method: "DELETE" });
    loadArticles();
  }

  async function publish(id) {
    await fetch(`/api/admin/articles/${id}/publish`, { method: "POST" });
    loadArticles();
  }

  return (
    <>
      <header className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
        <div className="flex h-16 items-center justify-between px-6">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">المقالات</h1>
            <p className="text-sm text-muted-foreground">إدارة مقالات المدونة باللغة العربية</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={loadArticles} disabled={refreshing}>
              تحديث
              <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
            </Button>
            <Button size="sm" asChild>
              <Link href="/admin/articles/new">
                مقال جديد
                <Plus className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 space-y-6 p-6">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>إجمالي المقالات</CardDescription>
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
        </div>

        <Card>
          <CardHeader>
            <CardTitle>كل المقالات</CardTitle>
            <CardDescription>عدّل المقالات أو انشرها أو احذفها.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>العنوان</TableHead>
                  <TableHead>الحالة</TableHead>
                  <TableHead className="text-start">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={3} className="py-10 text-center text-muted-foreground">
                      لا توجد مقالات بعد.{" "}
                      <Link href="/admin/articles/new" className="font-medium text-foreground underline-offset-4 hover:underline">
                        أنشئ أول مقال
                      </Link>
                    </TableCell>
                  </TableRow>
                ) : (
                  items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div className="font-medium">{item.locales?.ar?.title || item.locales?.en?.title || "بدون عنوان"}</div>
                        <div className="text-xs text-muted-foreground">{item.slug}</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={statusVariant(item.status)}>{statusLabels[item.status] || item.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/admin/articles/${item.id}/edit`}>تعديل</Link>
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
