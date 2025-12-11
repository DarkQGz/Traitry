// utils/db.ts
import Database from "better-sqlite3";
import path from "path";

// Database file path
const dbPath = path.join(process.cwd(), "data.db");
export const db = new Database(dbPath);

// Initialize users table
db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    createdAt TEXT NOT NULL
  )
`).run();
