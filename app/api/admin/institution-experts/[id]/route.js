import { NextResponse } from "next/server";
import { institutionExpertInputSchema } from "@/lib/cms/validators";
import {
  deleteInstitutionExpert,
  getInstitutionExpertAdmin,
  updateInstitutionExpert,
} from "@/lib/cms/institutionExpertsRepository";
import { revalidateResearchCache } from "@/lib/cms/revalidateExperts";
import { requireAdmin } from "@/lib/cms/routeAuth";

export async function GET(request, { params }) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  const { id } = await params;
  const item = await getInstitutionExpertAdmin(id);
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ item });
}

export async function PATCH(request, { params }) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  const { id } = await params;
  const body = await request.json();
  const parsed = institutionExpertInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  const ok = await updateInstitutionExpert(id, parsed.data);
  if (!ok) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const item = await getInstitutionExpertAdmin(id);
  revalidateResearchCache();
  return NextResponse.json({ ok: true, item });
}

export async function DELETE(_request, { params }) {
  const unauthorized = await requireAdmin(_request);
  if (unauthorized) return unauthorized;
  const { id } = await params;
  try {
    await deleteInstitutionExpert(id);
    revalidateResearchCache();
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error?.message === "INSTITUTION_EXPERT_HAS_RESEARCH") {
      return NextResponse.json(
        { error: "لا يمكن حذف خبير مرتبط بأبحاث. أزل الربط من الأبحاث أولاً." },
        { status: 409 }
      );
    }
    throw error;
  }
}
