"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center text-zinc-100">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800">
            <LockKeyhole className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-semibold">لوحة إدارة اِبْحَثْ</h1>
          <p className="mt-2 text-sm text-zinc-400">سجّل الدخول لإدارة مقالات المدونة</p>
        </div>

        <Card className="border-zinc-800 bg-zinc-900 text-zinc-50 shadow-2xl">
          <CardHeader>
            <CardTitle>مرحباً بعودتك</CardTitle>
            <CardDescription className="text-zinc-400">أدخل بيانات الدخول للمتابعة.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="username" className="text-zinc-200">
                  اسم المستخدم
                </Label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="eb7ath_admin"
                  autoComplete="username"
                  className="border-zinc-700 bg-zinc-950 text-zinc-50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-zinc-200">
                  كلمة المرور
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  autoComplete="current-password"
                  className="border-zinc-700 bg-zinc-950 text-zinc-50"
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
    </div>
  );
}
