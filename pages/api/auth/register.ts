// pages/api/auth/register.ts
import type { NextApiRequest, NextApiResponse } from "next";
import db from "@/utils/db";
import bcrypt from "bcryptjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Missing fields" });
  }

  // Check if user exists
  const existingUser = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert user
  const result = db
    .prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)")
    .run(name, email, hashedPassword);

  const newUser = db.prepare("SELECT * FROM users WHERE id = ?").get(result.lastInsertRowid);

  res.status(201).json({
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
  });
}
