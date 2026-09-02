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
import {
  emptyInstitutionExpertForm,
  institutionExpertToForm,
  toInstitutionExpertPayload,
} from "@/lib/cms/institutionExpertForm";

export function InstitutionExpertEditor({ expertId }) {
  const router = useRouter();
  const editing = Boolean(expertId);
  const [form, setForm] = useState(emptyInstitutionExpertForm);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(editing);
  const [error, setError] = useState("");

  const pageTitle = useMemo(
    () => (editing ? "تعديل خبير المؤسسة" : "إضافة خبير مؤسسة"),
    [editing]
  );

  useEffect(() => {
    if (!expertId) return;

    let active = true;
    setFetching(true);
    setError("");

    fetch(`/api/admin/institution-experts/${expertId}`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        if (!active) return;
        setForm(institutionExpertToForm(data.item));
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

    const body = JSON.stringify(toInstitutionExpertPayload(form));
    const url = editing
      ? `/api/admin/institution-experts/${form.id}`
      : "/api/admin/institution-experts";
    const method = editing ? "PATCH" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "content-type": "application/json" },
      body,
    });

    setLoading(false);

    if (!res.ok) {
      setError("تعذر حفظ بيانات الخبير. تأكد من تعبئة جميع الحقول وصحة رابط ResearchGate.");
      return;
    }

    router.push("/admin/institution-experts");
    router.refresh();
  }

  return (
    <>
      <header className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
        <div className="flex h-16 items-center justify-between gap-4 px-6">
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" asChild>
              <Link href="/admin/institution-experts" aria-label="العودة إلى خبراء المؤسسة">
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-semibold tracking-tight">{pageTitle}</h1>
              <p className="text-sm text-muted-foreground">
                بيانات الخبير وملف ResearchGate لعرضه في صفحات الأبحاث.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href="/admin/institution-experts">إلغاء</Link>
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
                  <Link href="/admin/institution-experts">العودة إلى خبراء المؤسسة</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>بيانات خبير المؤسسة</CardTitle>
                <CardDescription>
                  يظهر هذا الخبير في صفحات الأبحاث كـ «خبير مؤسسة ابحث» مع زر ملف ResearchGate.
                </CardDescription>
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
                    <div className="space-y-2 sm:col-span-1">
                      <Label htmlFor="researchgateUrl">رابط ResearchGate</Label>
                      <Input
                        id="researchgateUrl"
                        type="url"
                        value={form.researchgateUrl}
                        onChange={(e) => setForm((p) => ({ ...p, researchgateUrl: e.target.value }))}
                        placeholder="https://www.researchgate.net/profile/..."
                        dir="ltr"
                        required
                      />
                    </div>
                  </div>

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
                        required
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
                        required
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
                        required
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
                        required
                      />
                    </div>
                  </div>

                  {error ? <p className="text-sm text-destructive">{error}</p> : null}

                  <div className="flex gap-2 pt-2">
                    <Button type="submit" disabled={loading}>
                      {loading ? "جارٍ الحفظ..." : editing ? "تحديث الخبير" : "إضافة الخبير"}
                    </Button>
                    <Button type="button" variant="outline" asChild>
                      <Link href="/admin/institution-experts">إلغاء</Link>
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
