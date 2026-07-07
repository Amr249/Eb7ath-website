export function requireEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}

export function getCmsEnv() {
  return {
    databaseUrl: requireEnv("DATABASE_URL"),
    adminUsername: requireEnv("CMS_ADMIN_USERNAME"),
    adminPassword: requireEnv("CMS_ADMIN_PASSWORD"),
    authSecret: requireEnv("CMS_AUTH_SECRET"),
    imageKitPublicKey: process.env.IMAGEKIT_PUBLIC_KEY || "",
    imageKitPrivateKey: process.env.IMAGEKIT_PRIVATE_KEY || "",
    imageKitUrlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || "",
  };
}
