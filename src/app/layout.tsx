import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "material-symbols/outlined.css";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fluxo - Dashboard Financeiro",
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
      <body className="bg-background text-on-surface min-h-screen">
        {children}
      </body>
    </html>
  );
}
