import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/utils/db";
import bcrypt from "bcryptjs";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        // Query user
        const result = await db.execute("SELECT * FROM users WHERE email = ?", [credentials.email]);
        const userRow = result.rows[0];
        if (!userRow) return null;

        const passwordFromDb = userRow.password;
        if (typeof passwordFromDb !== "string") return null;

        const isValid = await bcrypt.compare(credentials.password, passwordFromDb);
        if (!isValid) return null;

        // NextAuth requires id, name, email as strings
        return {
          id: String(userRow.id),
          name: String(userRow.name),
          email: String(userRow.email),
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
});
