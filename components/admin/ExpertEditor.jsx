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
import { emptyExpertForm, expertToForm, toExpertPayload } from "@/lib/cms/expertForm";

export function ExpertEditor({ expertId }) {
  const router = useRouter();
  const editing = Boolean(expertId);
  const [form, setForm] = useState(emptyExpertForm);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(editing);
  const [error, setError] = useState("");

  const pageTitle = useMemo(() => (editing ? "تعديل الخبير" : "إضافة خبير جديد"), [editing]);

  useEffect(() => {
    if (!expertId) return;

    let active = true;
    setFetching(true);
    setError("");

    fetch(`/api/admin/experts/${expertId}`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        if (!active) return;
        setForm(expertToForm(data.item));
      })
      .catch(() => {
        if (active) setError("تعذر تحميل بيانات الخبير.");
      })
      .finally(() => {
        if (active) setFetching(false);
      });

    return () => {
      active = false;
    };
  }, [expertId]);

  async function save(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const body = JSON.stringify(toExpertPayload(form));
    const url = editing ? `/api/admin/experts/${form.id}` : "/api/admin/experts";
    const method = editing ? "PATCH" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "content-type": "application/json" },
      body,
    });

    setLoading(false);

    if (!res.ok) {
      setError("تعذر حفظ بيانات الخبير. تأكد من تعبئة جميع الحقول.");
      return;
    }

    router.push("/admin/experts");
    router.refresh();
  }

  return (
    <>
      <header className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
        <div className="flex h-16 items-center justify-between gap-4 px-6">
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" asChild>
              <Link href="/admin/experts" aria-label="العودة إلى الخبراء">
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-semibold tracking-tight">{pageTitle}</h1>
              <p className="text-sm text-muted-foreground">أدخل بيانات الخبير بالعربية والإنجليزية.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href="/admin/experts">إلغاء</Link>
            </Button>
            <Button onClick={save} disabled={loading || fetching}>
              {loading ? "جارٍ الحفظ..." : editing ? "تحديث الخبير" : "إضافة الخبير"}
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
                جارٍ تحميل البيانات...
              </CardContent>
            </Card>
          ) : error && !form.nameAr && !form.nameEn ? (
            <Card>
              <CardContent className="py-16 text-center">
                <p className="mb-4 text-muted-foreground">{error}</p>
                <Button asChild>
                  <Link href="/admin/experts">العودة إلى الخبراء</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>بيانات الخبير</CardTitle>
                <CardDescription>الصورة والترتيب والحالة تتحكم في ظهور الخبير في الموقع.</CardDescription>
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
                        placeholder="اختياري — يُولَّد من الاسم الإنجليزي"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sortOrder">الترتيب</Label>
                      <Input
                        id="sortOrder"
                        type="number"
                        min={0}
                        max={9999}
                        value={form.sortOrder}
                        onChange={(e) => setForm((p) => ({ ...p, sortOrder: Number(e.target.value) }))}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
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
                    <div className="flex items-end pb-2">
                      <label className="flex cursor-pointer items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={form.featuredOnLanding}
                          onChange={(e) => setForm((p) => ({ ...p, featuredOnLanding: e.target.checked }))}
                          className="h-4 w-4 rounded border-zinc-300"
                        />
                        إظهار في الصفحة الرئيسية
                      </label>
                    </div>
                  </div>

                  <CoverImageUpload
                    value={form.imageUrl}
                    onChange={(imageUrl) => setForm((p) => ({ ...p, imageUrl }))}
                    label="صورة الخبير"
                    uploadType="expert"
                    emptyLabel="ارفع صورة الخبير"
                    previewClassName="mx-auto h-48 w-48 rounded-full object-cover"
                  />

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold">العربية</h3>
                    <div className="space-y-2">
                      <Label htmlFor="nameAr">الاسم</Label>
                      <Input
                        id="nameAr"
                        value={form.nameAr}
                        onChange={(e) => setForm((p) => ({ ...p, nameAr: e.target.value }))}
                        dir="rtl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialtyAr">التخصص</Label>
                      <Input
                        id="specialtyAr"
                        value={form.specialtyAr}
                        onChange={(e) => setForm((p) => ({ ...p, specialtyAr: e.target.value }))}
                        dir="rtl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="affiliationAr">الانتماء / الجامعة</Label>
                      <Textarea
                        id="affiliationAr"
                        rows={2}
                        value={form.affiliationAr}
                        onChange={(e) => setForm((p) => ({ ...p, affiliationAr: e.target.value }))}
                        dir="rtl"
                      />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold">English</h3>
                    <div className="space-y-2">
                      <Label htmlFor="nameEn">Name</Label>
                      <Input
                        id="nameEn"
                        value={form.nameEn}
                        onChange={(e) => setForm((p) => ({ ...p, nameEn: e.target.value }))}
                        dir="ltr"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialtyEn">Specialty</Label>
                      <Input
                        id="specialtyEn"
                        value={form.specialtyEn}
                        onChange={(e) => setForm((p) => ({ ...p, specialtyEn: e.target.value }))}
                        dir="ltr"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="affiliationEn">Affiliation</Label>
                      <Textarea
                        id="affiliationEn"
                        rows={2}
                        value={form.affiliationEn}
                        onChange={(e) => setForm((p) => ({ ...p, affiliationEn: e.target.value }))}
                        dir="ltr"
                      />
                    </div>
                  </div>

                  {error ? <p className="text-sm text-destructive">{error}</p> : null}

                  <div className="flex gap-2 pt-2">
                    <Button type="submit" disabled={loading}>
                      {loading ? "جارٍ الحفظ..." : editing ? "تحديث الخبير" : "إضافة الخبير"}
                    </Button>
                    <Button type="button" variant="outline" asChild>
                      <Link href="/admin/experts">إلغاء</Link>
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
