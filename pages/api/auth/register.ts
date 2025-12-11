import type { NextApiRequest, NextApiResponse } from "next";
import { getDB } from "../../../utils/db";
import bcrypt from "bcryptjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { name, email, password } = req.body;

  const db = await getDB();

  const existing = await db.get("SELECT * FROM users WHERE email = ?", email);
  if (existing) return res.status(422).json({ message: "User already exists" });

  const hashed = await bcrypt.hash(password, 12);
  await db.run("INSERT INTO users (name, email, password, createdAt) VALUES (?, ?, ?, ?)", 
    name, email, hashed, new Date().toISOString()
  );

  res.status(201).json({ message: "User created" });
}
