
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

// Configuration de la police principale
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Configuration de la police secondaire
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Métadonnées du site
export const metadata: Metadata = {
  title: "Mon Blog Next.js",
  description: "Un blog moderne créé avec Next.js et Tailwind CSS",
};

// Layout principal
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50">

        {/* Barre de navigation commune */}
        <Navbar />

        {/* Contenu des différentes pages */}
        <main className="flex-1">
          {children}
        </main>

      </body>
    </html>
  );
}
