import "./globals.css";
import { Inter } from "next/font/google";
import { ToastProvider } from "@/components/ui/toast-provider";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Script from "next/script";
import CalendlyScripts from "@/components/CalendlyScripts";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Umer Shaikh | Software Engineer",
  description: "Portfolio website of Umer Shaikh, Software Engineer. Showcasing projects, experience, education, and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased`}>
        <div className="min-h-screen bg-background">
          <ThemeProvider defaultTheme="dark" storageKey="umer-theme">
            {children}
            <ToastProvider />
          </ThemeProvider>
          <CalendlyScripts />
        </div>
      </body>
    </html>
  );
};
