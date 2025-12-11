"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (result?.error) alert(result.error);
    else alert("Login successful!");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="mb-2 w-full p-2 border rounded" />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="mb-2 w-full p-2 border rounded" />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
    </form>
  );
}
