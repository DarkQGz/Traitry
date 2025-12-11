"use client";

import { useSession, signOut } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();

  if (!session) return <p className="text-center mt-10">You are not logged in.</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p><strong>Name:</strong> {session.user?.name}</p>
      <p><strong>Email:</strong> {session.user?.email}</p>
      <button onClick={() => signOut()} className="mt-4 bg-red-600 text-white p-2 rounded">Logout</button>
    </div>
  );
}
