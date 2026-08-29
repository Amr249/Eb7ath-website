import { NextResponse } from "next/server";
import { isImageKitConfigured, uploadBlogImage, uploadExpertImage } from "@/lib/cms/imagekit";
import { requireAdmin } from "@/lib/cms/routeAuth";

const MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/avif", "image/gif"]);

export async function POST(request) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;

  if (!isImageKitConfigured()) {
    return NextResponse.json({ error: "ImageKit is not configured" }, { status: 500 });
  }

  const formData = await request.formData();
  const file = formData.get("file");
  const uploadType = String(formData.get("type") || "blog");

  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  if (!ALLOWED_TYPES.has(file.type)) {
    return NextResponse.json({ error: "Unsupported image type" }, { status: 400 });
  }

  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "Image must be 5MB or smaller" }, { status: 400 });
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const url =
      uploadType === "expert"
        ? await uploadExpertImage(buffer, file.name)
        : await uploadBlogImage(buffer, file.name);
    return NextResponse.json({ ok: true, url });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Upload failed" },
      { status: 500 }
    );
  }
}
