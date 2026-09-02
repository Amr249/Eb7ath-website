"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  emptyResearchForm,
  emptyTeamMember,
  researchToForm,
  setCorrespondingMember,
  toResearchPayload,
} from "@/lib/cms/researchForm";

export function ResearchEditor({ researchId }) {
  const router = useRouter();
  const editing = Boolean(researchId);
  const [form, setForm] = useState(emptyResearchForm);
  const [experts, setExperts] = useState([]);
  const [institutionExperts, setInstitutionExperts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(editing);
  const [error, setError] = useState("");

  const pageTitle = useMemo(() => (editing ? "تعديل البحث" : "إضافة بحث جديد"), [editing]);

  useEffect(() => {
    Promise.all([
      fetch("/api/admin/experts").then((res) => (res.ok ? res.json() : { items: [] })),
      fetch("/api/admin/institution-experts").then((res) => (res.ok ? res.json() : { items: [] })),
    ])
      .then(([expertsData, institutionData]) => {
        setExperts(expertsData.items || []);
        setInstitutionExperts(
          (institutionData.items || []).filter((item) => item.status === "published")
        );
      })
      .catch(() => {
        setExperts([]);
        setInstitutionExperts([]);
      });
  }, []);

  useEffect(() => {
    if (!researchId) return;

    let active = true;
    setFetching(true);
    setError("");

    fetch(`/api/admin/research/${researchId}`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        if (!active) return;
        setForm(researchToForm(data.item));
      })
      .catch(() => {
        if (active) setError("تعذر تحميل بيانات البحث.");
      })
      .finally(() => {
        if (active) setFetching(false);
      });

    return () => {
      active = false;
    };
  }, [researchId]);

  function updateMember(index, field, value) {
    setForm((prev) => {
      let teamMembers = prev.teamMembers.map((member, i) =>
        i === index ? { ...member, [field]: value } : member
      );

      if (field === "institutionExpertId" && value) {
        const selected = institutionExperts.find((item) => item.id === value);
        if (selected) {
          teamMembers = teamMembers.map((member, i) =>
            i === index
              ? {
                  ...member,
                  institutionExpertId: value,
                  nameEn: selected.locales?.en?.name || member.nameEn,
                  nameAr: selected.locales?.ar?.name || member.nameAr,
                  affiliationEn: selected.locales?.en?.affiliation || member.affiliationEn,
                  affiliationAr: selected.locales?.ar?.affiliation || member.affiliationAr,
                  email: "",
                  isCorresponding: true,
                }
              : member
          );
          teamMembers = setCorrespondingMember(teamMembers, index);
        }
      }

      if (field === "isCorresponding" && value) {
        return { ...prev, teamMembers: setCorrespondingMember(teamMembers, index) };
      }

      if (field === "isCorresponding" && !value) {
        teamMembers = teamMembers.map((member, i) =>
          i === index ? { ...member, institutionExpertId: "" } : member
        );
      }

      return { ...prev, teamMembers };
    });
  }

  function addMember() {
    setForm((prev) => ({
      ...prev,
      teamMembers: [...prev.teamMembers, { ...emptyTeamMember }],
    }));
  }

  function removeMember(index) {
    setForm((prev) => ({
      ...prev,
      teamMembers: prev.teamMembers.filter((_, i) => i !== index),
    }));
  }

  async function save(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    if (!form.expertId) {
      setLoading(false);
      setError("يرجى اختيار الخبير المرتبط بالبحث.");
      return;
    }

    const missingInstitutionExpert = form.teamMembers.some(
      (member) => member.isCorresponding && !member.institutionExpertId
    );
    if (missingInstitutionExpert) {
      setLoading(false);
      setError("يرجى اختيار خبير مؤسسة ابحث للمؤلف المراسل.");
      return;
    }

    const body = JSON.stringify(toResearchPayload(form));
    const url = editing ? `/api/admin/research/${form.id}` : "/api/admin/research";
    const method = editing ? "PATCH" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "content-type": "application/json" },
      body,
    });

    setLoading(false);

    if (!res.ok) {
      setError("تعذر حفظ البحث. تأكد من تعبئة جميع الحقول المطلوبة.");
      return;
    }

    router.push("/admin/research");
    router.refresh();
  }

  return (
    <>
      <header className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
        <div className="flex h-16 items-center justify-between gap-4 px-6">
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" asChild>
              <Link href="/admin/research" aria-label="العودة إلى الأبحاث">
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-semibold tracking-tight">{pageTitle}</h1>
              <p className="text-sm text-muted-foreground">العنوان بالإنجليزية مع بيانات المجلة والفريق.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href="/admin/research">إلغاء</Link>
            </Button>
            <Button onClick={save} disabled={loading || fetching}>
              {loading ? "جارٍ الحفظ..." : editing ? "تحديث البحث" : "إضافة البحث"}
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
          ) : error && !form.title ? (
            <Card>
              <CardContent className="py-16 text-center">
                <p className="mb-4 text-muted-foreground">{error}</p>
                <Button asChild>
                  <Link href="/admin/research">العودة إلى الأبحاث</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <form className="space-y-6" onSubmit={save}>
              <Card>
                <CardHeader>
                  <CardTitle>بيانات البحث</CardTitle>
                  <CardDescription>اربط البحث بالخبير الاستشاري وحدد حالة النشر.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="expertId">الخبير الاستشاري</Label>
                    <Select
                      id="expertId"
                      value={form.expertId}
                      onChange={(e) => setForm((p) => ({ ...p, expertId: e.target.value }))}
                      required
                    >
                      <option value="">— اختر خبيراً —</option>
                      {experts.map((expert) => (
                        <option key={expert.id} value={expert.id}>
                          {expert.locales?.ar?.name || expert.locales?.en?.name || expert.slug}
                        </option>
                      ))}
                    </Select>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="slug">الرابط المختصر</Label>
                      <Input
                        id="slug"
                        value={form.slug}
                        onChange={(e) => setForm((p) => ({ ...p, slug: e.target.value }))}
                        placeholder="اختياري — يُولَّد من العنوان"
                      />
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
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">العنوان (English)</Label>
                    <Textarea
                      id="title"
                      rows={3}
                      value={form.title}
                      onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                      dir="ltr"
                      lang="en"
                      required
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="journal">المجلة</Label>
                      <Input
                        id="journal"
                        value={form.journal}
                        onChange={(e) => setForm((p) => ({ ...p, journal: e.target.value }))}
                        dir="ltr"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="publishedAt">تاريخ النشر</Label>
                      <Input
                        id="publishedAt"
                        type="date"
                        value={form.publishedAt}
                        onChange={(e) => setForm((p) => ({ ...p, publishedAt: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="volume">المجلد</Label>
                      <Input
                        id="volume"
                        type="number"
                        min={0}
                        value={form.volume}
                        onChange={(e) => setForm((p) => ({ ...p, volume: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="articleNumber">رقم المقال</Label>
                      <Input
                        id="articleNumber"
                        type="number"
                        min={0}
                        value={form.articleNumber}
                        onChange={(e) => setForm((p) => ({ ...p, articleNumber: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="year">السنة</Label>
                      <Input
                        id="year"
                        type="number"
                        min={1900}
                        max={2100}
                        value={form.year}
                        onChange={(e) => setForm((p) => ({ ...p, year: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="doi">DOI</Label>
                    <Input
                      id="doi"
                      value={form.doi}
                      onChange={(e) => setForm((p) => ({ ...p, doi: e.target.value }))}
                      dir="ltr"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="externalUrl">رابط Springer / المصدر</Label>
                      <Input
                        id="externalUrl"
                        type="url"
                        value={form.externalUrl}
                        onChange={(e) => setForm((p) => ({ ...p, externalUrl: e.target.value }))}
                        dir="ltr"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telegramUrl">رابط Telegram</Label>
                      <Input
                        id="telegramUrl"
                        type="url"
                        value={form.telegramUrl}
                        onChange={(e) => setForm((p) => ({ ...p, telegramUrl: e.target.value }))}
                        dir="ltr"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between gap-4">
                  <div>
                    <CardTitle>فريق الباحثين</CardTitle>
                    <CardDescription>
                      أضف الباحثين وحدد خبير مؤسسة ابحث (المؤلف المراسل) من القائمة.
                    </CardDescription>
                  </div>
                  <Button type="button" variant="outline" size="sm" onClick={addMember}>
                    إضافة باحث
                    <Plus className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {form.teamMembers.length === 0 ? (
                    <p className="py-6 text-center text-sm text-muted-foreground">لا يوجد باحثون بعد.</p>
                  ) : (
                    form.teamMembers.map((member, index) => (
                      <div key={index} className="rounded-lg border p-4 space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-sm font-medium">باحث #{index + 1}</p>
                          <Button type="button" variant="ghost" size="sm" onClick={() => removeMember(index)}>
                            حذف
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label>Name (EN)</Label>
                            <Input
                              value={member.nameEn}
                              onChange={(e) => updateMember(index, "nameEn", e.target.value)}
                              dir="ltr"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>الاسم (AR)</Label>
                            <Input
                              value={member.nameAr}
                              onChange={(e) => updateMember(index, "nameAr", e.target.value)}
                              dir="rtl"
                            />
                          </div>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label>Affiliation (EN)</Label>
                            <Textarea
                              rows={2}
                              value={member.affiliationEn}
                              onChange={(e) => updateMember(index, "affiliationEn", e.target.value)}
                              dir="ltr"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>الانتماء (AR)</Label>
                            <Textarea
                              rows={2}
                              value={member.affiliationAr}
                              onChange={(e) => updateMember(index, "affiliationAr", e.target.value)}
                              dir="rtl"
                            />
                          </div>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                          {member.isCorresponding ? (
                            <div className="space-y-2 sm:col-span-2">
                              <Label>خبير مؤسسة ابحث (المؤلف المراسل)</Label>
                              <Select
                                value={member.institutionExpertId || ""}
                                onChange={(e) => updateMember(index, "institutionExpertId", e.target.value)}
                                required
                              >
                                <option value="">اختر خبير المؤسسة</option>
                                {institutionExperts.map((item) => (
                                  <option key={item.id} value={item.id}>
                                    {item.locales?.ar?.name || item.locales?.en?.name}
                                  </option>
                                ))}
                              </Select>
                              {institutionExperts.length === 0 ? (
                                <p className="text-xs text-muted-foreground">
                                  لا يوجد خبراء مؤسسة منشورون.{" "}
                                  <Link href="/admin/institution-experts/new" className="underline">
                                    أضف خبيراً جديداً
                                  </Link>
                                </p>
                              ) : null}
                            </div>
                          ) : (
                            <div className="space-y-2">
                              <Label>البريد الإلكتروني</Label>
                              <Input
                                type="email"
                                value={member.email}
                                onChange={(e) => updateMember(index, "email", e.target.value)}
                                dir="ltr"
                              />
                            </div>
                          )}
                          <div className="flex items-end pb-2">
                            <label className="flex cursor-pointer items-center gap-2 text-sm">
                              <input
                                type="checkbox"
                                checked={member.isCorresponding}
                                onChange={(e) => updateMember(index, "isCorresponding", e.target.checked)}
                                className="h-4 w-4 rounded border-zinc-300"
                              />
                              خبير مؤسسة ابحث (المؤلف المراسل)
                            </label>
                          </div>
                        </div>

                        {index < form.teamMembers.length - 1 ? <Separator /> : null}
                      </div>
                    ))
                  )}
                </CardContent>
              </Card>

              {error ? <p className="text-sm text-destructive">{error}</p> : null}

              <div className="flex gap-2">
                <Button type="submit" disabled={loading}>
                  {loading ? "جارٍ الحفظ..." : editing ? "تحديث البحث" : "إضافة البحث"}
                </Button>
                <Button type="button" variant="outline" asChild>
                  <Link href="/admin/research">إلغاء</Link>
                </Button>
              </div>
            </form>
          )}
        </div>
      </main>
    </>
  );
}
