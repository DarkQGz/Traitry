import type { NextApiRequest, NextApiResponse } from "next";
import db from "@/utils/db";
import bcrypt from "bcryptjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ message: "Missing fields" });

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const stmt = db.prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
    const info = stmt.run(name, email, hashedPassword);
    res.status(201).json({ message: "User created", id: info.lastInsertRowid });
  } catch (err: any) {
    if (err.code === "SQLITE_CONSTRAINT_UNIQUE") {
      res.status(400).json({ message: "Email already exists" });
    } else {
      res.status(500).json({ message: "Server error" });
    }
  }
}
