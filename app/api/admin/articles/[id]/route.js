import { NextResponse } from "next/server";
import { articleInputSchema } from "@/lib/cms/validators";
import { deleteArticle, getArticleAdmin, updateArticle } from "@/lib/cms/blogRepository";
import { revalidateBlogCache } from "@/lib/cms/revalidateBlog";
import { requireAdmin } from "@/lib/cms/routeAuth";

export async function GET(request, { params }) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  const { id } = await params;
  const item = await getArticleAdmin(id);
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ item });
}

export async function PATCH(request, { params }) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  const { id } = await params;
  const body = await request.json();
  const parsed = articleInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  try {
    const ok = await updateArticle(id, parsed.data);
    if (!ok) return NextResponse.json({ error: "Not found" }, { status: 404 });
    revalidateBlogCache();
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error?.message === "SCHEDULED_AT_REQUIRED") {
      return NextResponse.json({ error: "Scheduled date/time is required" }, { status: 400 });
    }
    throw error;
  }
}

export async function DELETE(_request, { params }) {
  const unauthorized = await requireAdmin(_request);
  if (unauthorized) return unauthorized;
  const { id } = await params;
  await deleteArticle(id);
  revalidateBlogCache();
  return NextResponse.json({ ok: true });
}
