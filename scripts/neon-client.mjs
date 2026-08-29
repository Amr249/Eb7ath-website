import { neon, neonConfig } from "@neondatabase/serverless";

const FETCH_TIMEOUT_MS = Number(process.env.NEON_FETCH_TIMEOUT_MS ?? 60_000);

/** Neon HTTP driver defaults to ~10s connect timeout; slow networks need more. */
neonConfig.fetchFunction = (url, options = {}) =>
  fetch(url, {
    ...options,
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });

/**
 * @param {string} databaseUrl
 */
export function createSqlClient(databaseUrl) {
  return neon(databaseUrl);
}

/**
 * @param {() => Promise<T>} fn
 * @param {{ attempts?: number, delayMs?: number, label?: string }} [opts]
 * @returns {Promise<T>}
 */
export async function withDbRetry(fn, opts = {}) {
  const attempts = opts.attempts ?? 3;
  const delayMs = opts.delayMs ?? 2000;
  const label = opts.label ?? "database operation";
  let lastError;

  for (let i = 1; i <= attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      const retryable =
        err?.sourceError?.code === "UND_ERR_CONNECT_TIMEOUT" ||
        err?.message?.includes("fetch failed") ||
        err?.message?.includes("timed out");

      if (!retryable || i === attempts) break;
      console.warn(`${label} failed (attempt ${i}/${attempts}), retrying in ${delayMs}ms…`);
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }

  throw lastError;
}
