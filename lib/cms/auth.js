import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { getCmsEnv } from "./env.js";

const COOKIE_NAME = "cms_session";

function secretKey() {
  return new TextEncoder().encode(getCmsEnv().authSecret);
}

export async function createSessionToken() {
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secretKey());
}

export async function verifySessionToken(token) {
  const { payload } = await jwtVerify(token, secretKey());
  return payload;
}

export async function setSessionCookie(token) {
  const jar = await cookies();
  jar.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearSessionCookie() {
  const jar = await cookies();
  jar.delete(COOKIE_NAME);
}

export function getSessionCookieName() {
  return COOKIE_NAME;
}
