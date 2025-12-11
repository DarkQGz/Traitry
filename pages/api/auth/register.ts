import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import db from "@/utils/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ message: "Missing fields" });

  const exists = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
  if (exists) return res.status(400).json({ message: "Email already registered" });

  const hashedPassword = await bcrypt.hash(password, 10);
  db.prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)").run(
    name,
    email,
    hashedPassword
  );

  res.status(201).json({ message: "User registered successfully" });
}
