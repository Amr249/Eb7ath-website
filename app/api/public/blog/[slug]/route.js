import { NextResponse } from "next/server";
import { getPublishedArticleBySlug } from "@/lib/cms/blogRepository";

export async function GET(request, { params }) {
  const { slug } = await params;
  const url = new URL(request.url);
  const locale = url.searchParams.get("locale") === "en" ? "en" : "ar";
  const item = await getPublishedArticleBySlug(slug, locale);
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ item });
}
