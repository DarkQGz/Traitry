"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

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
      if (!res.ok) alert(data.message || "Registration failed");
      else alert("Registration successful! You can now log in.");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Register</h1>
        <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} className="w-full p-3 border mb-4 rounded focus:ring-2 focus:ring-blue-500" required />
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-3 border mb-4 rounded focus:ring-2 focus:ring-blue-500" required />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full p-3 border mb-6 rounded focus:ring-2 focus:ring-blue-500" required />
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">{loading ? "Registering..." : "Register"}</button>
      </form>
    </div>
  );
}
