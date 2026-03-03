import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FitStack AI — AI-Native Operating Infrastructure for Fitness",
  description:
    "We build the data and intelligence foundation gym operators need to lead in the AI era. Interfaces evolve. Data endures.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-light.ico", sizes: "any", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon-32-light.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "FitStack AI",
    description: "AI-native operating infrastructure for the fitness industry.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
