import { NextResponse } from "next/server";
import { getPublishedArticleBySlug } from "@/lib/cms/blogRepository";

export const revalidate = 60;

export async function GET(request, { params }) {
  const { slug } = await params;
  const url = new URL(request.url);
  const locale = url.searchParams.get("locale") === "en" ? "en" : "ar";

  try {
    const item = await getPublishedArticleBySlug(slug, locale);
    if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(
      { item },
      {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      }
    );
  } catch {
    return NextResponse.json({ error: "Failed to load article" }, { status: 500 });
  }
}
