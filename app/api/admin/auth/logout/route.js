import { NextResponse } from "next/server";
import { clearSessionCookie } from "@/lib/cms/auth";
import { requireAdmin } from "@/lib/cms/routeAuth";

export async function POST(request) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  await clearSessionCookie();
  return NextResponse.json({ ok: true });
}
