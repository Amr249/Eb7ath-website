import { NextResponse } from "next/server";
import { createSessionToken, setSessionCookie } from "@/lib/cms/auth";
import { safeEqual } from "@/lib/cms/credentials";
import { getCmsEnv } from "@/lib/cms/env";

export async function POST(request) {
  const body = await request.json();
  const { adminUsername, adminPassword } = getCmsEnv();

  if (!body?.username || !body?.password) {
    return NextResponse.json({ error: "اسم المستخدم وكلمة المرور مطلوبان" }, { status: 400 });
  }

  const usernameOk = safeEqual(body.username, adminUsername);
  const passwordOk = safeEqual(body.password, adminPassword);

  if (!usernameOk || !passwordOk) {
    return NextResponse.json({ error: "اسم المستخدم أو كلمة المرور غير صحيحة" }, { status: 401 });
  }

  const sessionToken = await createSessionToken();
  await setSessionCookie(sessionToken);
  return NextResponse.json({ ok: true });
}
