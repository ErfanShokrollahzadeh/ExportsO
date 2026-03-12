import React from "react";
import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import { LanguageProvider } from "./context/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ExportsO — Premium Imports",
  description:
    "ExportsO brings the finest fruits and artisan goods directly to Turkey. Quality, freshness, and authenticity — from farm to destination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${playfair.variable} antialiased`} suppressHydrationWarning>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingButtons />
        </LanguageProvider>
      </body>
    </html>
  );
}
