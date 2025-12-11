"use client";

import { useSession, signOut } from "next-auth/react";
import { useThemeLanguage } from "@/ThemeLanguageContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const { theme, language } = useThemeLanguage();
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} min-h-screen flex items-center justify-center transition-colors duration-500`}>
        <p>{language === "en" ? "Loading..." : "Ачааллаж байна..."}</p>
      </div>
    );
  }

  if (!session) return null;

  const cardBgClass = theme === "dark" ? "bg-black text-white" : "bg-white text-black";

  const handleLogout = async () => {
    await signOut({ redirect: false }); // Sign out without default redirect
    router.push("/"); // Redirect to homepage
  };

  return (
    <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} min-h-screen flex items-center justify-center p-8 transition-colors duration-500`}>
      <form className={`${cardBgClass} w-full max-w-md p-8 border border-purple-500 rounded-lg shadow-lg transition-colors duration-500 flex flex-col gap-4`}>
        <h1 className="text-3xl font-bold mb-6 text-center">{language === "en" ? "Profile" : "Профайл"}</h1>

        <p><strong>{language === "en" ? "Name:" : "Нэр:"}</strong> {session.user?.name}</p>
        <p><strong>{language === "en" ? "Email:" : "Имэйл:"}</strong> {session.user?.email}</p>

        <button
          type="button"
          onClick={handleLogout}
          className={`mt-4 w-full py-3 rounded border-2 border-purple-500 font-semibold transition ${theme === "dark" ? "bg-black text-white hover:bg-purple-700" : "bg-white text-purple-500 hover:bg-purple-500 hover:text-white"}`}
        >
          {language === "en" ? "Log Out" : "Гарах"}
        </button>
      </form>
    </div>
  );
}
