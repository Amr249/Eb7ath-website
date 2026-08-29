import { NextResponse } from "next/server";
import { expertInputSchema } from "@/lib/cms/validators";
import { createExpert, getExpertAdmin, listExpertsAdmin } from "@/lib/cms/expertsRepository";
import { revalidateExpertsCache } from "@/lib/cms/revalidateExperts";
import { requireAdmin } from "@/lib/cms/routeAuth";

export async function GET(request) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  const items = await listExpertsAdmin();
  return NextResponse.json({ items });
}

export async function POST(request) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  const body = await request.json();
  const parsed = expertInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  const id = await createExpert(parsed.data);
  const item = await getExpertAdmin(id);
  revalidateExpertsCache(item?.slug);
  return NextResponse.json({ ok: true, id });
}
