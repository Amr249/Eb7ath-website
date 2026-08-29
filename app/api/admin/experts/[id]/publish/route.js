import { NextResponse } from "next/server";
import { getExpertAdmin, publishExpert } from "@/lib/cms/expertsRepository";
import { revalidateExpertsCache } from "@/lib/cms/revalidateExperts";
import { requireAdmin } from "@/lib/cms/routeAuth";

export async function POST(request, { params }) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  const { id } = await params;
  const item = await getExpertAdmin(id);
  await publishExpert(id);
  revalidateExpertsCache(item?.slug);
  return NextResponse.json({ ok: true });
}
