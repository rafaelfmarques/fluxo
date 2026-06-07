import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SideNavBar } from "@/components/layout/SideNavBar";
import { Header } from "@/components/layout/Header";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "fluxo - Dashboard Financeiro",
  description: "High-fidelity Wealth Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${hankenGrotesk.variable} ${jetBrainsMono.variable} dark`}
    >
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-surface min-h-screen">
        <SideNavBar />
        <main className="md:ml-64 flex flex-col min-h-screen">
          <Header />
          <div className="p-margin-desktop space-y-stack-lg max-w-container-max mx-auto w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
