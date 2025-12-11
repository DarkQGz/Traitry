// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/utils/db"; // your Better SQLite3 db
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
        if (!credentials?.email || !credentials?.password) return null;

        const user = db
          .prepare("SELECT * FROM users WHERE email = ?")
          .get(credentials.email);

        if (user && (await bcrypt.compare(credentials.password, user.password))) {
          // Return only the fields NextAuth expects
          return { id: user.id.toString(), name: user.name, email: user.email };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  secret: "1fe515da24c55f48ee8f549f008d4e56659c3b3fb35898d0bb9cb265f6f80a5e",
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
    