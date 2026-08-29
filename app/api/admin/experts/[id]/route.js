import { NextResponse } from "next/server";
import { expertInputSchema } from "@/lib/cms/validators";
import { deleteExpert, getExpertAdmin, updateExpert } from "@/lib/cms/expertsRepository";
import { revalidateExpertsCache } from "@/lib/cms/revalidateExperts";
import { requireAdmin } from "@/lib/cms/routeAuth";

export async function GET(request, { params }) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  const { id } = await params;
  const item = await getExpertAdmin(id);
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ item });
}

export async function PATCH(request, { params }) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  const { id } = await params;
  const existing = await getExpertAdmin(id);
  const body = await request.json();
  const parsed = expertInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  const ok = await updateExpert(id, parsed.data);
  if (!ok) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const updated = await getExpertAdmin(id);
  revalidateExpertsCache(existing?.slug);
  if (updated?.slug !== existing?.slug) revalidateExpertsCache(updated?.slug);
  return NextResponse.json({ ok: true });
}

export async function DELETE(_request, { params }) {
  const unauthorized = await requireAdmin(_request);
  if (unauthorized) return unauthorized;
  const { id } = await params;
  const existing = await getExpertAdmin(id);
  try {
    await deleteExpert(id);
    revalidateExpertsCache(existing?.slug);
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error?.message === "EXPERT_HAS_RESEARCH") {
      return NextResponse.json(
        { error: "لا يمكن حذف خبير مرتبط بأبحاث. احذف الأبحاث أولاً." },
        { status: 409 }
      );
    }
    throw error;
  }
}
