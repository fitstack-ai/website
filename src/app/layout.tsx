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
    "The data and intelligence layer gym operators need as AI transforms how businesses run. Interfaces come and go. Data remains.",
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
