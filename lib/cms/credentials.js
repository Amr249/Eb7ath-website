import { timingSafeEqual } from "crypto";

function toBuffer(value) {
  return Buffer.from(String(value ?? ""));
}

export function safeEqual(a, b) {
  const left = toBuffer(a);
  const right = toBuffer(b);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}
