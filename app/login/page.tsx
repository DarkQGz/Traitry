"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", { redirect: false, email, password });
    if (res?.error) alert(res.error);
    else alert("Login successful!");
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-3 border mb-4 rounded focus:ring-2 focus:ring-blue-500" required />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full p-3 border mb-6 rounded focus:ring-2 focus:ring-blue-500" required />
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">{loading ? "Logging in..." : "Login"}</button>
      </form>
    </div>
  );
}
