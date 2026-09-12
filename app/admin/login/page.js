"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IMAGES, SITE_NAME } from "@/lib/assets";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/auth/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    setLoading(false);

    if (!res.ok) {
      setError("اسم المستخدم أو كلمة المرور غير صحيحة");
      return;
    }

    router.push("/admin");
  }

  return (
    <div className="grid min-h-screen bg-white md:grid-cols-[40%_60%]">
      <section className="flex items-center justify-center bg-white px-6 py-10 text-zinc-900 md:px-10 lg:px-14">
        <div className="w-full max-w-md">
          <div className="text-center">
            <img
              src={IMAGES.logoHeaderAr}
              alt={SITE_NAME}
              className="mx-auto mb-8 h-12 w-auto max-w-[220px] object-contain"
            />
            <h1 className="text-2xl font-semibold">لوحة إدارة موقع اِبْحَثْ</h1>
            <p className="mt-2 text-sm text-zinc-500">سجّل الدخول لإدارة محتوى الموقع بالكامل</p>
          </div>

          <Card className="mt-8 border-zinc-200 bg-white text-zinc-900 shadow-xl">
            <CardHeader>
              <CardTitle>مرحباً بعودتك</CardTitle>
              <CardDescription className="text-zinc-500">أدخل بيانات الدخول للمتابعة.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-zinc-800">
                    اسم المستخدم
                  </Label>
                  <Input
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="eb7ath_admin"
                    autoComplete="username"
                    className="border-zinc-200 bg-white text-zinc-900"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-zinc-800">
                    كلمة المرور
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    autoComplete="current-password"
                    className="border-zinc-200 bg-white text-zinc-900"
                  />
                </div>

                {error ? <p className="text-sm text-red-400">{error}</p> : null}

                <Button className="w-full" disabled={loading}>
                  {loading ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="relative hidden overflow-hidden md:block">
        <img
          src={IMAGES.homeHero3}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </section>
    </div>
  );
}
