"use client";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { ToastProvider } from "@/components/ui/toast-provider";
import CalendlyScripts from "@/components/CalendlyScripts";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background antialiased">
      <ThemeProvider defaultTheme="dark" storageKey="umer-theme">
        {children}
        <ToastProvider />
      </ThemeProvider>
      <CalendlyScripts />
    </div>
  );
}
