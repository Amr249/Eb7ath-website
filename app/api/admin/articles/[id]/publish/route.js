import { NextResponse } from "next/server";
import { revalidateBlogCache } from "@/lib/cms/revalidateBlog";
import { publishArticle } from "@/lib/cms/blogRepository";
import { requireAdmin } from "@/lib/cms/routeAuth";

export async function POST(request, { params }) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  const { id } = await params;
  await publishArticle(id);
  revalidateBlogCache();
  return NextResponse.json({ ok: true });
}
