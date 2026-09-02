"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Plus, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  institutionExpertStatusLabels,
  institutionExpertStatusVariant,
} from "@/lib/cms/institutionExpertForm";

export function InstitutionExpertsDashboard() {
  const [items, setItems] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [deleteError, setDeleteError] = useState("");

  const stats = useMemo(() => {
    const published = items.filter((item) => item.status === "published").length;
    return {
      total: items.length,
      published,
      drafts: items.filter((item) => item.status === "draft").length,
    };
  }, [items]);

  async function loadItems() {
    setRefreshing(true);
    setDeleteError("");
    const res = await fetch("/api/admin/institution-experts");
    const data = await res.json();
    setItems(data.items || []);
    setRefreshing(false);
  }

  useEffect(() => {
    loadItems();
  }, []);

  async function remove(id) {
    if (!window.confirm("هل تريد حذف هذا الخبير؟")) return;
    setDeleteError("");
    const res = await fetch(`/api/admin/institution-experts/${id}`, { method: "DELETE" });
    if (!res.ok) {
      const data = await res.json();
      setDeleteError(data.error || "تعذّر حذف الخبير.");
      return;
    }
    loadItems();
  }

  async function publish(id) {
    await fetch(`/api/admin/institution-experts/${id}/publish`, { method: "POST" });
    loadItems();
  }

  return (
    <>
      <header className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
        <div className="flex h-16 items-center justify-between px-6">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">خبراء المؤسسة</h1>
            <p className="text-sm text-muted-foreground">
              إدارة بيانات خبراء مؤسسة ابحث وروابط ResearchGate
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={loadItems} disabled={refreshing}>
              تحديث
              <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
            </Button>
            <Button size="sm" asChild>
              <Link href="/admin/institution-experts/new">
                خبير جديد
                <Plus className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 space-y-6 p-6">
        {deleteError ? (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {deleteError}
          </div>
        ) : null}

        <div className="grid gap-4 md:grid-cols-3">
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
              <CardDescription>المسودات</CardDescription>
              <CardTitle className="text-3xl text-amber-600">{stats.drafts}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>كل خبراء المؤسسة</CardTitle>
            <CardDescription>
              أضف خبراء جدد أو عدّل بياناتهم وروابط ResearchGate لعرضها في صفحات الأبحاث.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>الاسم</TableHead>
                  <TableHead>ResearchGate</TableHead>
                  <TableHead>الحالة</TableHead>
                  <TableHead>الأبحاث</TableHead>
                  <TableHead className="text-start">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="py-10 text-center text-muted-foreground">
                      لا يوجد خبراء بعد.{" "}
                      <Link
                        href="/admin/institution-experts/new"
                        className="font-medium text-foreground underline-offset-4 hover:underline"
                      >
                        أضف أول خبير
                      </Link>
                    </TableCell>
                  </TableRow>
                ) : (
                  items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div className="font-medium">
                          {item.locales?.ar?.name || item.locales?.en?.name || "بدون اسم"}
                        </div>
                        <div className="text-xs text-muted-foreground">{item.slug}</div>
                      </TableCell>
                      <TableCell>
                        {item.researchgateUrl ? (
                          <a
                            href={item.researchgateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-sky-700 underline-offset-4 hover:underline"
                            dir="ltr"
                          >
                            عرض الرابط
                          </a>
                        ) : (
                          <span className="text-sm text-muted-foreground">—</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge variant={institutionExpertStatusVariant(item.status)}>
                          {institutionExpertStatusLabels[item.status] || item.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{item.researchCount ?? 0}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/admin/institution-experts/${item.id}/edit`}>تعديل</Link>
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
