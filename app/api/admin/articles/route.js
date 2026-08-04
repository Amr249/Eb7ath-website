import { NextResponse } from "next/server";
import { articleInputSchema } from "@/lib/cms/validators";
import { createArticle, listArticlesAdmin } from "@/lib/cms/blogRepository";
import { requireAdmin } from "@/lib/cms/routeAuth";

export async function GET(request) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  const items = await listArticlesAdmin();
  return NextResponse.json({ items });
}

export async function POST(request) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  const body = await request.json();
  const parsed = articleInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  try {
    const id = await createArticle(parsed.data);
    return NextResponse.json({ ok: true, id });
  } catch (error) {
    if (error?.message === "SCHEDULED_AT_REQUIRED") {
      return NextResponse.json({ error: "Scheduled date/time is required" }, { status: 400 });
    }
    throw error;
  }
}
