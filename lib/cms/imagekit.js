import ImageKit, { toFile } from "@imagekit/nodejs";
import { getCmsEnv } from "./env";

let _client;

function getClient() {
  if (_client) return _client;
  const { imageKitPrivateKey } = getCmsEnv();
  if (!imageKitPrivateKey) {
    throw new Error("Missing IMAGEKIT_PRIVATE_KEY");
  }
  _client = new ImageKit({ privateKey: imageKitPrivateKey });
  return _client;
}

function safeFileName(name) {
  return String(name || "cover.jpg")
    .replace(/[^\w.\-]+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 120);
}

export async function uploadCmsImage(fileBuffer, fileName, folder) {
  const { imageKitUrlEndpoint } = getCmsEnv();
  const client = getClient();
  const uploadFile = await toFile(fileBuffer, safeFileName(fileName));

  const response = await client.files.upload({
    file: uploadFile,
    fileName: safeFileName(fileName),
    folder,
    useUniqueFileName: true,
  });

  if (response?.url) return response.url;
  if (response?.filePath && imageKitUrlEndpoint) {
    return `${imageKitUrlEndpoint.replace(/\/$/, "")}${response.filePath}`;
  }

  throw new Error("ImageKit upload did not return a URL");
}

export async function uploadBlogImage(fileBuffer, fileName) {
  return uploadCmsImage(fileBuffer, fileName, "/eb7ath/blog");
}

export async function uploadExpertImage(fileBuffer, fileName) {
  return uploadCmsImage(fileBuffer, fileName, "/eb7ath/experts");
}

export function isImageKitConfigured() {
  const { imageKitPrivateKey, imageKitUrlEndpoint } = getCmsEnv();
  return Boolean(imageKitPrivateKey && imageKitUrlEndpoint);
}
