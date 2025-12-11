// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/utils/db";
import bcrypt from "bcryptjs";
import type { NextAuthOptions } from "next-auth";

if (!process.env.NEXTAUTH_SECRET) {
  // keep this check, helpful in Vercel logs
  console.warn("NEXTAUTH_SECRET is not set — NextAuth requires it in production");
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // query using libsql client
        const result = await db.execute("SELECT id, name, email, password FROM users WHERE email = ?", [
          credentials.email,
        ]);

        const row = result.rows?.[0] as any | undefined;
        if (!row) return null;

        const hash = row.password;
        if (typeof hash !== "string") return null;

        const valid = await bcrypt.compare(credentials.password, hash);
        if (!valid) return null;

        // NextAuth expects id, name, email as strings
        return {
          id: String(row.id),
          name: row.name ? String(row.name) : undefined,
          email: row.email ? String(row.email) : undefined,
        } as any;
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = (user as any).id;
      return token;
    },
    async session({ session, token }) {
      if (session.user) session.user.id = token.id as string | undefined;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
