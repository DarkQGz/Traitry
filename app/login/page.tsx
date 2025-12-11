"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useThemeLanguage } from "@/ThemeLanguageContext";

export default function LoginPage() {
  const { theme, language } = useThemeLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const pageBgClass = theme === "dark" ? "bg-black" : "bg-white";
  const formBgClass = theme === "dark" ? "bg-black text-white" : "bg-white text-black";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) alert(res.error);
    else alert(language === "en" ? "Login successful!" : "Амжилттай нэвтэрлээ!");

    setLoading(false);
  };

  return (
    <div className={`${pageBgClass} min-h-screen flex items-center justify-center transition-colors duration-500`}>
      <form
        className={`${formBgClass} w-full max-w-md p-8 border border-purple-500 rounded-lg shadow-lg transition-colors duration-500`}
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold mb-6 text-center">{language === "en" ? "Login" : "Нэвтрэх"}</h1>

        <input
          type="email"
          placeholder={language === "en" ? "Email" : "Имэйл"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border-2 border-purple-500 rounded bg-transparent placeholder-purple-500 focus:outline-none"
          required
        />

        <input
          type="password"
          placeholder={language === "en" ? "Password" : "Нууц үг"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border-2 border-purple-500 rounded bg-transparent placeholder-purple-500 focus:outline-none"
          required
        />

        <button
          type="submit"
          className="w-full py-3 rounded border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition"
        >
          {loading ? (language === "en" ? "Logging in..." : "Нэвтрэх...") : language === "en" ? "Login" : "Нэвтрэх"}
        </button>
      </form>
    </div>
  );
}
