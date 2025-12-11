"use client";

import { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useThemeLanguage } from "@/ThemeLanguageContext";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const { theme, language } = useThemeLanguage();
  const router = useRouter();

  // Redirect unauthenticated users to login
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <p className="p-8">
        {language === "en" ? "Loading..." : "Ачааллаж байна..."}
      </p>
    );
  }

  if (!session) return null; // while redirecting

  const containerClass = theme === "dark" ? "bg-black text-white" : "bg-white text-black";

  return (
    <div className={`${containerClass} min-h-screen flex flex-col items-center justify-start pt-32 px-6 transition-colors duration-500`}>
      <div className="max-w-4xl w-full p-10 flex flex-col gap-6 rounded-xl border border-purple-500 shadow-lg">
        <h1 className="text-3xl font-bold">
          {language === "en" ? "Profile" : "Профайл"}
        </h1>

        <p>
          <span className="font-semibold">{language === "en" ? "Name" : "Нэр"}:</span> {session.user?.name ?? "-"}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {session.user?.email ?? "-"}
        </p>

        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="mt-4 px-4 py-2 rounded border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition w-max"
        >
          {language === "en" ? "Logout" : "Гарах"}
        </button>
      </div>
    </div>
  );
}
