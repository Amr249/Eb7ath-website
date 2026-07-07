import { neon } from "@neondatabase/serverless";
import { getCmsEnv } from "./env.js";

let _sql;

export function sql() {
  if (!_sql) {
    const { databaseUrl } = getCmsEnv();
    _sql = neon(databaseUrl);
  }
  return _sql;
}
