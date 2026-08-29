import "./load-env.mjs";
import { createSqlClient, withDbRetry } from "./neon-client.mjs";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error("Missing DATABASE_URL in .env");
  process.exit(1);
}

const host = databaseUrl.match(/@([^/]+)/)?.[1] ?? "unknown";
console.log("Connecting to:", host);

const sql = createSqlClient(databaseUrl);
try {
  const rows = await withDbRetry(() => sql`SELECT 1 AS ok`, { label: "Connection test" });
  console.log("Connection OK:", rows);
} catch (err) {
  console.error("Connection failed:", err.message);
  if (err.sourceError) {
    console.error("Cause:", err.sourceError.code, err.sourceError.message);
  }
  process.exit(1);
}
