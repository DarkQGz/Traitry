"use client";

import { useThemeLanguage } from "@/ThemeLanguageContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const { theme, language } = useThemeLanguage();
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  if (status === "loading") return <p className="p-8">{language === "en" ? "Loading..." : "Ачааллаж байна..."}</p>;
  if (!session) return null;

  const pageBgClass = theme === "dark" ? "bg-black text-white" : "bg-white text-black";

  return (
    <div className={`${pageBgClass} min-h-screen flex items-center justify-center transition-colors duration-500`}>
      <div className="w-full max-w-md p-8 border border-purple-500 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">{language === "en" ? "Profile" : "Профайл"}</h1>
        <p><strong>{language === "en" ? "Name:" : "Нэр:"}</strong> {session.user?.name}</p>
        <p><strong>{language === "en" ? "Email:" : "Имэйл:"}</strong> {session.user?.email}</p>
      </div>
    </div>
  );
}
