// pages/api/auth/register.ts
import { NextApiRequest, NextApiResponse } from "next";
import db from "@/utils/db";
import bcrypt from "bcryptjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: "All fields are required" });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.execute("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]);
    return res.status(200).json({ message: "User registered successfully" });
  } catch (err: any) {
    if (err.message.includes("UNIQUE")) return res.status(400).json({ message: "Email already exists" });
    return res.status(500).json({ message: "Server error" });
  }
}
