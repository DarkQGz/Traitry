// app/api/auth/register/route.ts
import { NextResponse } from "next/server";
import db from "@/utils/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body ?? {};

    if (!name || !email || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    // create hashed password
    const hashed = await bcrypt.hash(password, 10);

    try {
      await db.execute("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [
        name,
        email,
        hashed,
      ]);
      return NextResponse.json({ message: "User registered" }, { status: 201 });
    } catch (err: any) {
      // libsql returns message with UNIQUE constraint
      const errMsg = String(err?.message ?? err);
      if (errMsg.toLowerCase().includes("unique") || errMsg.toLowerCase().includes("constraint")) {
        return NextResponse.json({ message: "Email already registered" }, { status: 400 });
      }
      console.error("Register error:", err);
      return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
  } catch (e) {
    console.error("Register parse error:", e);
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }
}
