import { readFile } from "fs/promises";
import { join, resolve, sep } from "path";
import { NextResponse } from "next/server";

const MIME = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
};

export async function GET(_request, { params }) {
  const segments = (await params).path;
  const relative = segments.join("/");
  const assetsRoot = resolve(process.cwd(), "assets");
  const filePath = resolve(assetsRoot, relative);

  if (filePath !== assetsRoot && !filePath.startsWith(assetsRoot + sep)) {
    return new NextResponse("Not Found", { status: 404 });
  }

  try {
    const data = await readFile(filePath);
    const ext = filePath.slice(filePath.lastIndexOf(".")).toLowerCase();
    const type = MIME[ext] || "application/octet-stream";
    return new NextResponse(data, {
      headers: {
        "Content-Type": type,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new NextResponse("Not Found", { status: 404 });
  }
}
