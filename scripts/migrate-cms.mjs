import "./load-env.mjs";
import { readFile } from "node:fs/promises";
import { createSqlClient, withDbRetry } from "./neon-client.mjs";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error("Missing DATABASE_URL in .env");
  process.exit(1);
}

const host = databaseUrl.match(/@([^/]+)/)?.[1] ?? "unknown";
console.log(`Connecting to ${host} (timeout ${process.env.NEON_FETCH_TIMEOUT_MS ?? 60000}ms)…`);

const sql = createSqlClient(databaseUrl);

try {
  await withDbRetry(() => sql`SELECT 1 AS ok`, { label: "Connection test" });
  console.log("Connection OK.");
} catch (err) {
  console.error("\nCould not reach Neon database.");
  console.error(err.message);
  if (err.sourceError) {
    console.error("Cause:", err.sourceError.code ?? "", err.sourceError.message ?? "");
  }
  console.error("\nTry:");
  console.error("  1. Check internet / VPN / firewall (Neon uses HTTPS on port 443)");
  console.error("  2. Confirm the Neon project is active at console.neon.tech");
  console.error("  3. In .env use the pooled connection string from Neon dashboard");
  console.error("  4. Remove &channel_binding=require from DATABASE_URL if present");
  console.error("  5. Run: set NEON_FETCH_TIMEOUT_MS=120000 && npm run cms:migrate");
  process.exit(1);
}

const schema = await readFile(new URL("../sql/cms.sql", import.meta.url), "utf8");
const statements = schema
  .split(";")
  .map((s) => s.trim())
  .filter(Boolean);

for (let i = 0; i < statements.length; i++) {
  const statement = statements[i];
  const preview = statement.split("\n")[0].slice(0, 60);
  await withDbRetry(() => sql.query(statement), {
    label: `Statement ${i + 1}/${statements.length} (${preview}…)`,
  });
}

console.log(`Applied ${statements.length} CMS SQL statements.`);
