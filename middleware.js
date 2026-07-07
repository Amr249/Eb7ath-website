import { NextResponse } from "next/server";
import { getSessionCookieName } from "@/lib/cms/auth";

function isProtected(pathname) {
  return pathname.startsWith("/admin") && !pathname.startsWith("/admin/login");
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  if (!isProtected(pathname)) return NextResponse.next();

  const token = request.cookies.get(getSessionCookieName())?.value;
  if (!token) return NextResponse.redirect(new URL("/admin/login", request.url));
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
