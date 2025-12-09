"use client";

import Link from "next/link";
import { useThemeLanguage } from "../ThemeLanguageContext";

export default function HomePage() {
  const { theme, language } = useThemeLanguage();

  const texts = {
    en: {
      title: "Welcome to Traitry",
      description:
        "Personality analysis powered by psychology + AI. Discover your deep behavioral patterns and understand yourself.",
      startTest: "Start Personality Test",
    },
    mn: {
      title: "Traitry-д тавтай морил",
      description:
        "Сэтгэл зүй болон AI-д суурилсан зан төлөвийн шинжилгээ. Өөрийн зан төлөвийг илүү гүнзгий ойлгоорой.",
      startTest: "Шинжилгээ эхлэх",
    },
  };

  const t = texts[language];

  // Page background
  const pageBgClass = theme === "dark" ? "bg-black" : "bg-black"; // fully black page even in light mode (as per your design)
  const textColorClass = theme === "dark" ? "text-white" : "text-white"; // text stays white

  // Container background and border
  const containerBgClass = theme === "dark" ? "bg-black" : "bg-black"; // container same as page
  const containerBorderClass = theme === "dark" ? "border-purple-700" : "border-purple-500";

  return (
<div className="flex flex-col items-center text-center px-6 pt-48 pb-16 m-0">
  <div className="max-w-4xl w-full p-10 flex flex-col items-center justify-center rounded-xl border border-purple-500">
    <h1 className={`${theme === "dark" ? "text-white" : "text-black"} text-4xl md:text-5xl font-bold mb-4`}>
      {t.title}
    </h1>
    <p className={`${theme === "dark" ? "text-white" : "text-black"} text-md md:text-lg mb-8`}>
      {t.description}
    </p>
  </div>
</div>

  );
}
