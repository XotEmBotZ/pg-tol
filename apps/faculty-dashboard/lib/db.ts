import { Pool } from "pg";

const connectionString =
  process.env.DATABASE_URL ||
  "postgresql://faculty_admin:FacultyLabSecurePassword2026@localhost:5432/lab_db";

export const db = new Pool({
  connectionString,
  max: 10,
  idleTimeoutMillis: 30000,
});
