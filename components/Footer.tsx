"use client";

import { useThemeLanguage } from "../ThemeLanguageContext";

export function Footer() {
  const { theme } = useThemeLanguage();

  const footerBg =
    theme === "dark"
      ? "bg-black border-t border-white/10 text-purple-300"
      : "bg-white border-t border-black/10 text-purple-500";

  return (
    <footer className={`w-full py-6 mt-auto transition-colors duration-500 ${footerBg}`}>
      <div className="max-w-6xl mx-auto text-center text-sm">
        <p>© {new Date().getFullYear()} Traitry. All rights reserved.</p>
        <p className="mt-1">Made with ❤️ in Mongolia</p>
      </div>
    </footer>
  );
}
