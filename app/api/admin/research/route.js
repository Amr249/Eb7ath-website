import { NextResponse } from "next/server";
import { researchInputSchema } from "@/lib/cms/validators";
import { createResearch, getResearchAdmin, listResearchAdmin } from "@/lib/cms/researchRepository";
import { getExpertAdmin } from "@/lib/cms/expertsRepository";
import { revalidateResearchCache } from "@/lib/cms/revalidateExperts";
import { requireAdmin } from "@/lib/cms/routeAuth";
export async function GET(request) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  const items = await listResearchAdmin();
  return NextResponse.json({ items });
}

export async function POST(request) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  const body = await request.json();
  const parsed = researchInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  const id = await createResearch(parsed.data);
  const item = await getResearchAdmin(id);
  const expert = item ? await getExpertAdmin(item.expertId) : null;
  revalidateResearchCache(item?.slug, expert?.slug);
  return NextResponse.json({ ok: true, id });}
