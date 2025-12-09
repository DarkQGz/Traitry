"use client";

import Link from "next/link";
import { useThemeLanguage } from "../ThemeLanguageContext";
import { usePathname } from "next/navigation";

export function Navbar() {
  const { theme, setTheme, language, setLanguage } = useThemeLanguage();
  const pathname = usePathname();

  const navBg =
    theme === "dark"
      ? "bg-black border-white/10 text-white"
      : "bg-white border-black/10 text-black";

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`w-full fixed top-0 z-50 border-b backdrop-blur transition-colors duration-500 ${navBg}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Traitry Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold tracking-wide">Traitry</span>
          </Link>

          <div className="hidden md:flex gap-6">
  <Link
    href="/"
    className={`transition ${isActive("/") ? "text-purple-300" : "hover:text-purple-300"}`}
  >
    Home
  </Link>
  <Link
    href="/result"
    className={`transition ${isActive("/result") ? "text-purple-300" : "hover:text-purple-300"}`}
  >
    Result
  </Link>
  <Link
    href="/compare"
    className={`transition ${isActive("/compare") ? "text-purple-300" : "hover:text-purple-300"}`}
  >
    Compare
  </Link>
  <Link
    href="/articles"
    className={`transition ${isActive("/articles") ? "text-purple-300" : "hover:text-purple-300"}`}
  >
    Articles
  </Link>
  <Link
    href="/about"
    className={`transition ${isActive("/about") ? "text-purple-300" : "hover:text-purple-300"}`}
  >
    About
  </Link>
</div>

        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/test"
            className={`px-4 py-2 rounded-md border border-purple-500 font-semibold transition ${
              theme === "dark" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            Start Test
          </Link>
          <Link
            href="/login"
            className={`px-4 py-2 rounded-md border border-purple-500 font-semibold transition ${
              theme === "dark" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            Login
          </Link>
          <Link
            href="/register"
            className={`px-4 py-2 rounded-md border border-purple-500 font-semibold transition ${
              theme === "dark" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            Register
          </Link>

          <button
            onClick={() => setLanguage(language === "en" ? "mn" : "en")}
            className={`px-3 py-1 rounded-md border border-purple-500 font-semibold transition ${
              theme === "dark" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {language === "en" ? "EN" : "MN"}
          </button>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`px-3 py-1 rounded-md border border-purple-500 font-semibold transition ${
              theme === "dark" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
}
