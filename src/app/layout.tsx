import "./globals.css";
import { Inter } from "next/font/google";
import { ToastProvider } from "@/components/ui/toast-provider";
import { ThemeProvider } from "@/components/theme/theme-provider";

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
      <body className={`${inter.className} antialiased min-h-screen bg-background`}>
        <ThemeProvider defaultTheme="dark" storageKey="umer-theme">
          {children}
          <ToastProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
