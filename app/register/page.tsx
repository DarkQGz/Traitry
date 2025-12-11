"use client";

import { useState } from "react";
import { useThemeLanguage } from "@/ThemeLanguageContext";

export default function RegisterPage() {
  const { theme, language } = useThemeLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const pageBgClass = theme === "dark" ? "bg-black" : "bg-white";
  const formBgClass = theme === "dark" ? "bg-black text-white" : "bg-white text-black";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();

      if (!res.ok) alert(data.message);
      else window.location.href = "/login";
    } catch (err) {
      console.error(err);
      alert(language === "en" ? "Something went wrong" : "Алдаа гарлаа");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${pageBgClass} min-h-screen flex items-center justify-center transition-colors duration-500`}>
      <form
        className={`${formBgClass} w-full max-w-md p-8 border border-purple-500 rounded-lg shadow-lg transition-colors duration-500`}
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold mb-6 text-center">{language === "en" ? "Register" : "Бүртгүүлэх"}</h1>

        <input
          type="text"
          placeholder={language === "en" ? "Name" : "Нэр"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 border-2 border-purple-500 rounded bg-transparent placeholder-purple-500 focus:outline-none"
          required
        />

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
          {loading ? (language === "en" ? "Registering..." : "Бүртгэж байна...") : language === "en" ? "Register" : "Бүртгүүлэх"}
        </button>
      </form>
    </div>
  );
}
