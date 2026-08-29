import { NextResponse } from "next/server";
import { researchInputSchema } from "@/lib/cms/validators";
import { deleteResearch, getResearchAdmin, updateResearch } from "@/lib/cms/researchRepository";
import { getExpertAdmin } from "@/lib/cms/expertsRepository";
import { revalidateResearchCache } from "@/lib/cms/revalidateExperts";
import { requireAdmin } from "@/lib/cms/routeAuth";

async function revalidateResearchItem(item, previousExpertId) {
  if (!item) return;
  const expert = await getExpertAdmin(item.expertId);
  revalidateResearchCache(item.slug, expert?.slug);
  if (previousExpertId && previousExpertId !== item.expertId) {
    const previousExpert = await getExpertAdmin(previousExpertId);
    revalidateResearchCache(item.slug, previousExpert?.slug);
  }
}
export async function GET(request, { params }) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  const { id } = await params;
  const item = await getResearchAdmin(id);
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ item });
}

export async function PATCH(request, { params }) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  const { id } = await params;
  const existing = await getResearchAdmin(id);
  const body = await request.json();
  const parsed = researchInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  const ok = await updateResearch(id, parsed.data);
  if (!ok) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const updated = await getResearchAdmin(id);
  await revalidateResearchItem(updated, existing?.expertId);
  if (existing?.slug && existing.slug !== updated?.slug) {
    revalidateResearchCache(existing.slug, null);
  }
  return NextResponse.json({ ok: true });}

export async function DELETE(_request, { params }) {
  const unauthorized = await requireAdmin(_request);
  if (unauthorized) return unauthorized;
  const { id } = await params;
  const existing = await getResearchAdmin(id);
  await deleteResearch(id);
  if (existing) {
    const expert = await getExpertAdmin(existing.expertId);
    revalidateResearchCache(existing.slug, expert?.slug);
  }
  return NextResponse.json({ ok: true });}
