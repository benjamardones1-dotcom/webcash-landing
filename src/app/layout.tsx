import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WEB CASH AI — Crea y Vende Páginas Web con IA",
  description:
    "Aprende a crear, vender y automatizar páginas web usando inteligencia artificial. Sin saber programar. Ebook premium + recursos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
