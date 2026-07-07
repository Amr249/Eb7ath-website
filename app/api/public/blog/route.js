import { NextResponse } from "next/server";
import { listPublishedArticles } from "@/lib/cms/blogRepository";

export async function GET(request) {
  const url = new URL(request.url);
  const locale = url.searchParams.get("locale") === "en" ? "en" : "ar";
  const limitParam = url.searchParams.get("limit");
  const limit = limitParam ? Math.min(Math.max(Number.parseInt(limitParam, 10) || 0, 1), 50) : undefined;
  const items = await listPublishedArticles(locale, limit);
  return NextResponse.json({ items });
}
