// pages/api/auth/[...nextauth].ts
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/utils/db"; // your db.ts
import bcrypt from "bcryptjs";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const user = db
          .prepare("SELECT * FROM users WHERE email = ?")
          .get(credentials.email);

        if (user && (await bcrypt.compare(credentials.password, user.password))) {
          // Return name and email for NextAuth
          return { name: user.name, email: user.email, id: user.id } as any;
        }

        return null;
      },
    }),
  ],

  session: { strategy: "jwt" },

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = (user as any).id; // attach id to JWT
      return token;
    },
    async session({ session, token }) {
      (session.user as any).id = token.id; // attach id to session
      return session;
    },
  },
};

export default NextAuth(authOptions);
