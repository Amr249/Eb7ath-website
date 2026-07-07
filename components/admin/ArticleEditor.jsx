"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { CoverImageUpload } from "@/components/admin/CoverImageUpload";
import { RichTextEditor } from "@/components/admin/RichTextEditor";
import { emptyArticleForm, toArticlePayload } from "@/lib/cms/articleForm";

export function ArticleEditor({ articleId }) {
  const router = useRouter();
  const editing = Boolean(articleId);
  const [form, setForm] = useState(emptyArticleForm);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(editing);
  const [error, setError] = useState("");

  const pageTitle = useMemo(
    () => (editing ? "تعديل المقال" : "إنشاء مقال جديد"),
    [editing]
  );

  useEffect(() => {
    if (!articleId) return;

    let active = true;
    setFetching(true);
    setError("");

    fetch(`/api/admin/articles/${articleId}`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        if (!active) return;
        const ar = data.item?.locales?.ar || {};
        setForm({
          id: data.item.id,
          slug: data.item.slug || "",
          coverImageUrl: data.item.coverImageUrl || "",
          readMinutes: data.item.readMinutes || 5,
          status: data.item.status || "draft",
          title: ar.title || "",
          excerpt: ar.excerpt || "",
          content: ar.content || "",
        });
      })
      .catch(() => {
        if (active) setError("تعذر تحميل المقال.");
      })
      .finally(() => {
        if (active) setFetching(false);
      });

    return () => {
      active = false;
    };
  }, [articleId]);

  async function save(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const body = JSON.stringify(toArticlePayload(form));
    const url = editing ? `/api/admin/articles/${form.id}` : "/api/admin/articles";
    const method = editing ? "PATCH" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "content-type": "application/json" },
      body,
    });

    setLoading(false);

    if (!res.ok) {
      setError("تعذر حفظ المقال. تأكد من تعبئة جميع الحقول.");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <>
      <header className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
        <div className="flex h-16 items-center justify-between gap-4 px-6">
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" asChild>
              <Link href="/admin" aria-label="العودة إلى المقالات">
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-semibold tracking-tight">{pageTitle}</h1>
              <p className="text-sm text-muted-foreground">أكمل الحقول باللغة العربية ثم احفظ المقال.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href="/admin">إلغاء</Link>
            </Button>
            <Button onClick={save} disabled={loading || fetching}>
              {loading ? "جارٍ الحفظ..." : editing ? "تحديث المقال" : "إنشاء المقال"}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 p-6">
        <div className="mx-auto max-w-4xl">
          {fetching ? (
            <Card>
              <CardContent className="flex min-h-[320px] items-center justify-center gap-2 text-muted-foreground">
                <Loader2 className="h-5 w-5 animate-spin" />
                جارٍ تحميل المقال...
              </CardContent>
            </Card>
          ) : error && !form.title ? (
            <Card>
              <CardContent className="py-16 text-center">
                <p className="mb-4 text-muted-foreground">{error}</p>
                <Button asChild>
                  <Link href="/admin">العودة إلى المقالات</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>بيانات المقال</CardTitle>
                <CardDescription>يمكنك تعديل المحتوى بحرية باستخدام أدوات التنسيق.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={save}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="slug">الرابط المختصر</Label>
                      <Input
                        id="slug"
                        value={form.slug}
                        onChange={(e) => setForm((p) => ({ ...p, slug: e.target.value }))}
                        placeholder="اختياري"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="readMinutes">مدة القراءة (دقائق)</Label>
                      <Input
                        id="readMinutes"
                        type="number"
                        min={1}
                        max={60}
                        value={form.readMinutes}
                        onChange={(e) => setForm((p) => ({ ...p, readMinutes: Number(e.target.value) }))}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="status">الحالة</Label>
                    <Select
                      id="status"
                      value={form.status}
                      onChange={(e) => setForm((p) => ({ ...p, status: e.target.value }))}
                    >
                      <option value="draft">مسودة</option>
                      <option value="published">منشور</option>
                    </Select>
                  </div>

                  <CoverImageUpload
                    value={form.coverImageUrl}
                    onChange={(coverImageUrl) => setForm((p) => ({ ...p, coverImageUrl }))}
                  />

                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="title">العنوان</Label>
                    <Input
                      id="title"
                      value={form.title}
                      onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="excerpt">المقتطف</Label>
                    <Textarea
                      id="excerpt"
                      rows={3}
                      value={form.excerpt}
                      onChange={(e) => setForm((p) => ({ ...p, excerpt: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">المحتوى</Label>
                    <RichTextEditor
                      key={form.id || "new"}
                      className="cms-editor--page"
                      value={form.content}
                      onChange={(content) => setForm((p) => ({ ...p, content }))}
                    />
                  </div>

                  {error ? <p className="text-sm text-destructive">{error}</p> : null}

                  <div className="flex gap-2 pt-2">
                    <Button type="submit" disabled={loading}>
                      {loading ? "جارٍ الحفظ..." : editing ? "تحديث المقال" : "إنشاء المقال"}
                    </Button>
                    <Button type="button" variant="outline" asChild>
                      <Link href="/admin">إلغاء</Link>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </>
  );
}
