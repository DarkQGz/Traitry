import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import path from "path";

let db: Database<sqlite3.Database, sqlite3.Statement>;

export async function getDB() {
  if (!db) {
    const dbPath = path.join(process.cwd(), "data.db");
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        createdAt TEXT NOT NULL
      )
    `);
  }
  return db;
}
