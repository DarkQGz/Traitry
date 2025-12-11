"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useThemeLanguage } from "@/ThemeLanguageContext";

export default function RegisterPage() {
  const { theme, language } = useThemeLanguage();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert(language === "en" ? "Please fill all fields." : "Бүх талбарыг бөглөнө үү.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert(language === "en" ? "Registered successfully! Now login." : "Бүртгэл амжилттай! Одоо нэвтэрнэ үү.");
        router.push("/login");
      } else {
        alert(data.message || (language === "en" ? "Registration failed." : "Бүртгэл амжилтгүй."));
      }
    } catch (err) {
      console.error(err);
      alert(language === "en" ? "Something went wrong." : "Алдаа гарлаа.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} min-h-screen flex items-center justify-center p-8`}>
      <form
        className="w-full max-w-md p-8 border border-purple-500 rounded-lg shadow-lg"
        onSubmit={handleRegister}
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          {language === "en" ? "Register" : "Бүртгүүлэх"}
        </h1>

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
          {loading ? (language === "en" ? "Registering..." : "Бүртгүүлж байна...") : language === "en" ? "Register" : "Бүртгүүлэх"}
        </button>

        <p
          className="mt-4 text-center text-sm cursor-pointer hover:underline"
          onClick={() => router.push("/login")}
        >
          {language === "en" ? "Already have an account? Login" : "Аль хэдийн бүртгэлтэй юу? Нэвтрэх"}
        </p>
      </form>
    </div>
  );
}
