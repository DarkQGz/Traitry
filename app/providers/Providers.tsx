// app/providers/Providers.tsx
"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeLanguageProvider } from "@/ThemeLanguageContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeLanguageProvider>
      <SessionProvider>{children}</SessionProvider>
    </ThemeLanguageProvider>
  );
}
