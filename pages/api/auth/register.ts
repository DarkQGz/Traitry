import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import db from "@/utils/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ message: "All fields are required" });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const stmt = db.prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
    stmt.run(name, email, hashedPassword);

    return res.status(201).json({ message: "User registered successfully" });
  } catch (err: any) {
    if (err.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return res.status(400).json({ message: "Email already exists" });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
}
