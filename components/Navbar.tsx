"use client";

import Link from "next/link";
import { useThemeLanguage } from "../ThemeLanguageContext";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export function Navbar() {
  const { theme, setTheme, language, setLanguage } = useThemeLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration errors
  useEffect(() => setMounted(true), []);

  const navBg =
    theme === "dark"
      ? "bg-black border-white/10 text-white"
      : "bg-white border-black/10 text-black";

  const isActive = (path: string) => pathname === path;

  if (!mounted) return null; // prevents SSR mismatch

  return (
    <nav
      className={`w-full fixed top-0 z-50 border-b backdrop-blur transition-colors duration-500 ${navBg}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left side: Logo + links */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Traitry Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold tracking-wide">Traitry</span>
          </Link>

          {/* Desktop links next to title */}
          <div className="hidden md:flex gap-6 ml-6">
            <Link href="/" className={`transition ${isActive("/") ? "text-purple-300" : "hover:text-purple-300"}`}>Home</Link>
            <Link href="/result" className={`transition ${isActive("/result") ? "text-purple-300" : "hover:text-purple-300"}`}>Result</Link>
            <Link href="/compare" className={`transition ${isActive("/compare") ? "text-purple-300" : "hover:text-purple-300"}`}>Compare</Link>
            <Link href="/articles" className={`transition ${isActive("/articles") ? "text-purple-300" : "hover:text-purple-300"}`}>Articles</Link>
            <Link href="/about" className={`transition ${isActive("/about") ? "text-purple-300" : "hover:text-purple-300"}`}>About</Link>
          </div>
        </div>

        {/* Right side: Desktop buttons / Mobile toggles */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Desktop buttons */}
          <div className="hidden md:flex gap-4">
            <Link href="/test" className={`px-4 py-2 rounded-md border border-purple-500 font-semibold transition ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>Start Test</Link>

            {session ? (
              <Link href="/profile" className={`px-4 py-2 rounded-md border border-purple-500 font-semibold transition ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
                {language === "en" ? "Profile" : "Профайл"}
              </Link>
            ) : (
              <>
                <Link href="/login" className={`px-4 py-2 rounded-md border border-purple-500 font-semibold transition ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>Login</Link>
                <Link href="/register" className={`px-4 py-2 rounded-md border border-purple-500 font-semibold transition ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>Register</Link>
              </>
            )}

            <button
              onClick={() => setLanguage(language === "en" ? "mn" : "en")}
              className={`px-3 py-1 rounded-md border border-purple-500 font-semibold transition ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
            >
              {language === "en" ? "EN" : "MN"}
            </button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`px-3 py-1 rounded-md border border-purple-500 font-semibold transition ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </div>

          {/* Mobile toggles */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setLanguage(language === "en" ? "mn" : "en")}
              className={`px-3 py-1 rounded-md border border-purple-500 font-semibold transition ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
            >
              {language === "en" ? "EN" : "MN"}
            </button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`px-3 py-1 rounded-md border border-purple-500 font-semibold transition ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg
                className="w-6 h-6 text-black dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-black px-6 py-4 flex flex-col gap-3 border-t border-gray-300 dark:border-white/10">
          <Link href="/" className={`transition ${isActive("/") ? "text-purple-300" : "hover:text-purple-300"}`}>Home</Link>
          <Link href="/result" className={`transition ${isActive("/result") ? "text-purple-300" : "hover:text-purple-300"}`}>Result</Link>
          <Link href="/compare" className={`transition ${isActive("/compare") ? "text-purple-300" : "hover:text-purple-300"}`}>Compare</Link>
          <Link href="/articles" className={`transition ${isActive("/articles") ? "text-purple-300" : "hover:text-purple-300"}`}>Articles</Link>
          <Link href="/about" className={`transition ${isActive("/about") ? "text-purple-300" : "hover:text-purple-300"}`}>About</Link>
          <Link href="/test" className={`px-4 py-2 rounded-md border border-purple-500 font-semibold transition ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>Start Test</Link>

          {session ? (
            <Link href="/profile" className={`px-4 py-2 rounded-md border border-purple-500 font-semibold transition ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
              {language === "en" ? "Profile" : "Профайл"}
            </Link>
          ) : (
            <>
              <Link href="/login" className={`px-4 py-2 rounded-md border border-purple-500 font-semibold transition ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>Login</Link>
              <Link href="/register" className={`px-4 py-2 rounded-md border border-purple-500 font-semibold transition ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
