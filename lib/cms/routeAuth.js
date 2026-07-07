import { NextResponse } from "next/server";
import { getSessionCookieName, verifySessionToken } from "./auth.js";

export async function requireAdmin(request) {
  const token = request.cookies.get(getSessionCookieName())?.value;
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    await verifySessionToken(token);
    return null;
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
