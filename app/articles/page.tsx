"use client";

import { useThemeLanguage } from "../../ThemeLanguageContext"; // adjust path depending on location

export default function ArticlesPage() {
  const { theme, language } = useThemeLanguage();
  const texts = {
    en: { title: "Articles", description: "Read articles about personality, careers, and growth." },
    mn: { title: "Нийтлэлүүд", description: "Зан төлөв, ажил мэргэжил, өөрийгөө хөгжүүлэх тухай нийтлэлүүд." },
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
