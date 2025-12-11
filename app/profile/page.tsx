"use client";

import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useThemeLanguage } from "@/ThemeLanguageContext";

export default function ProfilePage() {
  const { theme, language } = useThemeLanguage();
  const [mounted, setMounted] = useState(false);

  // Prevent SSR hydration issues
  useEffect(() => setMounted(true), []);
  const { data: session } = useSession();

  const pageBgClass = theme === "dark" ? "bg-black" : "bg-white";
  const cardBgClass = theme === "dark" ? "bg-black text-white" : "bg-white text-black";

  if (!mounted) return null; // avoids prerender errors

  if (!session)
    return (
      <div className={`${pageBgClass} min-h-screen flex items-center justify-center transition-colors duration-500`}>
        <div className={`${cardBgClass} p-10 border border-purple-500 rounded-lg`}>
          <h1 className="text-2xl font-bold text-center">
            {language === "en" ? "You are not logged in" : "Та нэвтрээгүй байна"}
          </h1>
        </div>
      </div>
    );

  return (
    <div className={`${pageBgClass} min-h-screen flex items-center justify-center transition-colors duration-500`}>
      <div className={`${cardBgClass} w-full max-w-2xl p-10 border border-purple-500 rounded-lg shadow-lg transition-colors duration-500`}>
        <h1 className="text-3xl font-bold mb-6">{language === "en" ? "Profile" : "Профайл"}</h1>

        <p>
          <strong>{language === "en" ? "Name:" : "Нэр:"}</strong> {session.user?.name || "-"}
        </p>
        <p>
          <strong>{language === "en" ? "Email:" : "Имэйл:"}</strong> {session.user?.email || "-"}
        </p>

        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="mt-6 w-full py-3 rounded border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition"
        >
          {language === "en" ? "Sign Out" : "Гарах"}
        </button>
      </div>
    </div>
  );
}
