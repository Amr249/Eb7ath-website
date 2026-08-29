import { NextResponse } from "next/server";
import { getResearchAdmin, publishResearch } from "@/lib/cms/researchRepository";
import { getExpertAdmin } from "@/lib/cms/expertsRepository";
import { revalidateResearchCache } from "@/lib/cms/revalidateExperts";
import { requireAdmin } from "@/lib/cms/routeAuth";

export async function POST(request, { params }) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  const { id } = await params;
  const item = await getResearchAdmin(id);
  await publishResearch(id);
  if (item) {
    const expert = await getExpertAdmin(item.expertId);
    revalidateResearchCache(item.slug, expert?.slug);
  }
  return NextResponse.json({ ok: true });
}