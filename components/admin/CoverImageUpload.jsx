"use client";

import { useRef, useState } from "react";
import { ImagePlus, Loader2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function CoverImageUpload({
  value,
  onChange,
  label = "صورة الغلاف",
  uploadType = "blog",
  emptyLabel = "ارفع صورة الغلاف",
  previewClassName = "h-48 w-full object-cover",
}) {
  const inputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleFileChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError("");

    const body = new FormData();
    body.append("file", file);
    body.append("type", uploadType);

    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "تعذّر رفع الصورة");
        return;
      }
      onChange(data.url);
    } catch {
      setError("تعذّر رفع الصورة");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  function removeImage() {
    onChange("");
    setError("");
  }

  return (
    <div className="space-y-3">
      <Label>{label}</Label>

      {value ? (
        <div className="overflow-hidden rounded-lg border bg-zinc-50">
          <img src={value} alt="" className={previewClassName} />
          <div className="flex gap-2 p-3">
            <Button type="button" variant="outline" size="sm" disabled={uploading} onClick={() => inputRef.current?.click()}>
              {uploading ? (
                <>
                  جارٍ الرفع...
                  <Loader2 className="h-4 w-4 animate-spin" />
                </>
              ) : (
                "تغيير الصورة"
              )}
            </Button>
            <Button type="button" variant="ghost" size="sm" disabled={uploading} onClick={removeImage}>
              إزالة
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="flex min-h-40 w-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-zinc-300 bg-zinc-50 px-4 py-8 text-center transition hover:border-zinc-400 hover:bg-zinc-100 disabled:opacity-60"
        >
          {uploading ? (
            <>
              <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
              <span className="text-sm text-zinc-600">جارٍ رفع الصورة...</span>
            </>
          ) : (
            <>
              <ImagePlus className="h-8 w-8 text-zinc-500" />
              <span className="text-sm font-medium text-zinc-700">{emptyLabel}</span>
              <span className="text-xs text-zinc-500">JPG, PNG, WEBP, AVIF, GIF حتى 5MB</span>
            </>
          )}
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/avif,image/gif"
        className="hidden"
        onChange={handleFileChange}
      />

      {error ? <p className="text-sm text-red-500">{error}</p> : null}
    </div>
  );
}
