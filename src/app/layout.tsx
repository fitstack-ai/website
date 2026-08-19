import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fitstack.ai"),
  title: { default: "FitStack AI — Own the platform that runs your business", template: "%s" },
  description: "An owned operating platform, delivered as an AI-native reference architecture for enterprise fitness operators.",
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
    title: "FitStack AI — Own the platform that runs your business",
    description: "An owned operating platform, delivered as an AI-native reference architecture for enterprise fitness operators.",
    type: "website",
    siteName: "FitStack AI",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "FitStack AI — Own the platform that runs your business." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FitStack AI — Own the platform that runs your business",
    description: "An owned operating platform, delivered as an AI-native reference architecture for enterprise fitness operators.",
    images: ["/og.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FitStack AI",
  url: "https://www.fitstack.ai",
  email: "hello@fitstack.ai",
  description: "An owned operating platform, delivered as an AI-native reference architecture for enterprise fitness operators.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={inter.variable} lang="en">
      <body className="antialiased">
        <script dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} type="application/ld+json" />
        {children}
      </body>
    </html>
  );
}
