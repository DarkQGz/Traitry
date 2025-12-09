"use client";

import { useThemeLanguage } from "../../ThemeLanguageContext"; // adjust path depending on location
export default function LoginPage() {
  const { theme, language } = useThemeLanguage();
  const texts = {
    en: { title: "Login", description: "Login to access your dashboard and results." },
    mn: { title: "Нэвтрэх", description: "Өөрийн хянах самбар, үр дүнг харахын тулд нэвтрэх." },
  };
  const t = texts[language];
  const pageBgClass = theme === "dark" ? "bg-black" : "bg-white";
  const textColorClass = theme === "dark" ? "text-white" : "text-black";

  return (
    <div className={`${pageBgClass} min-h-screen flex flex-col items-center justify-center px-6 py-16`}>
      <h1 className={`${textColorClass} text-4xl font-bold mb-4`}>{t.title}</h1>
      <p className={`${textColorClass} text-lg text-center max-w-2xl`}>{t.description}</p>
    </div>
  );
}
