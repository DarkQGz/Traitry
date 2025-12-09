"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface ContextProps {
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
  language: "en" | "mn";
  setLanguage: (lang: "en" | "mn") => void;
}

const ThemeLanguageContext = createContext<ContextProps | undefined>(undefined);

export const ThemeLanguageProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [language, setLanguage] = useState<"en" | "mn">("en");

  // Add/remove 'dark' class for Tailwind dark mode
  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    // Dynamically set body background to prevent white behind navbar
    document.body.style.backgroundColor = theme === "dark" ? "#000000" : "#ffffff";
    document.body.style.color = theme === "dark" ? "#ffffff" : "#000000";
  }, [theme]);

  return (
    <ThemeLanguageContext.Provider value={{ theme, setTheme, language, setLanguage }}>
      {children}
    </ThemeLanguageContext.Provider>
  );
};

export const useThemeLanguage = () => {
  const context = useContext(ThemeLanguageContext);
  if (!context) throw new Error("useThemeLanguage must be used within ThemeLanguageProvider");
  return context;
};
