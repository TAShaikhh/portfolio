'use client';

import { ThemeProvider } from "@/components/theme/theme-provider";
import { ToastProvider } from "@/components/ui/toast-provider";
import CalendlyScripts from "./CalendlyScripts";

export default function BodyContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="umer-theme">
        {children}
        <ToastProvider />
      </ThemeProvider>
      <CalendlyScripts />
    </>
  );
}