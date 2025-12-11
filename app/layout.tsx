"use client";

import { ReactNode } from "react";
import { ThemeLanguageProvider } from "../ThemeLanguageContext";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import "../globals.css";
import { SessionProvider } from "next-auth/react"; // <-- import this

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <ThemeLanguageProvider>
        <SessionProvider>
          <body className="flex flex-col min-h-screen transition-colors duration-500">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </body>
        </SessionProvider>
      </ThemeLanguageProvider>
    </html>
  );
}
