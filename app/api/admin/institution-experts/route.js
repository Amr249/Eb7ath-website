import { NextResponse } from "next/server";
import { institutionExpertInputSchema } from "@/lib/cms/validators";
import {
  createInstitutionExpert,
  getInstitutionExpertAdmin,
  listInstitutionExpertsAdmin,
} from "@/lib/cms/institutionExpertsRepository";
import { revalidateResearchCache } from "@/lib/cms/revalidateExperts";
import { requireAdmin } from "@/lib/cms/routeAuth";

export async function GET(request) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  const items = await listInstitutionExpertsAdmin();
  return NextResponse.json({ items });
}

export async function POST(request) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  const body = await request.json();
  const parsed = institutionExpertInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  const id = await createInstitutionExpert(parsed.data);
  const item = await getInstitutionExpertAdmin(id);
  revalidateResearchCache();
  return NextResponse.json({ ok: true, id, item });
}
