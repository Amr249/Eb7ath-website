import { neon, neonConfig } from "@neondatabase/serverless";
import { getCmsEnv } from "./env.js";

const FETCH_TIMEOUT_MS = Number(process.env.NEON_FETCH_TIMEOUT_MS ?? 60_000);

neonConfig.fetchFunction = (url, options = {}) =>
  fetch(url, {
    ...options,
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });

let _sql;

export function sql() {
  if (!_sql) {
    const { databaseUrl } = getCmsEnv();
    _sql = neon(databaseUrl);
  }
  return _sql;
}
