"use client";

import { ReactNode } from "react";
import { ThemeLanguageProvider } from "../ThemeLanguageContext";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SessionProvider } from "next-auth/react";
import "../globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <ThemeLanguageProvider>
        <body className="flex flex-col min-h-screen transition-colors duration-500">
          <SessionProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </SessionProvider>
        </body>
      </ThemeLanguageProvider>
    </html>
  );
}
