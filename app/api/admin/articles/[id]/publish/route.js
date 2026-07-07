import { NextResponse } from "next/server";
import { publishArticle } from "@/lib/cms/blogRepository";
import { requireAdmin } from "@/lib/cms/routeAuth";

export async function POST(request, { params }) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  const { id } = await params;
  await publishArticle(id);
  return NextResponse.json({ ok: true });
}
