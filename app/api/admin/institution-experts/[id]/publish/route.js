import { NextResponse } from "next/server";
import { publishInstitutionExpert } from "@/lib/cms/institutionExpertsRepository";
import { revalidateResearchCache } from "@/lib/cms/revalidateExperts";
import { requireAdmin } from "@/lib/cms/routeAuth";

export async function POST(request, { params }) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  const { id } = await params;
  await publishInstitutionExpert(id);
  revalidateResearchCache();
  return NextResponse.json({ ok: true });
}
