// pages/api/auth/register.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../utils/db";
import bcrypt from "bcryptjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, password } = req.body;

  // Check if user exists
  const exists = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
  if (exists) return res.status(422).json({ message: "User already exists" });

  // Hash password
  const hashed = await bcrypt.hash(password, 12);

  // Insert new user
  const info = db
    .prepare("INSERT INTO users (name, email, password, createdAt) VALUES (?, ?, ?, ?)")
    .run(name, email, hashed, new Date().toISOString());

  res.status(201).json({ message: "User created", userId: info.lastInsertRowid });
}
