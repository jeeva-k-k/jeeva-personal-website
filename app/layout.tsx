import type { Metadata } from "next";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeeva K K | Managing Director, Zenin Hive",
  description:
    "Portfolio of Jeeva K K, Managing Director of Zenin Hive, cloud engineer, AI consultant, WordPress developer, SEO specialist, digital marketing strategist, physicist, and independent theoretical particle physics researcher.",
  metadataBase: new URL("https://jeevakk.com"),
  keywords: [
    "Jeeva K K",
    "Zenin Hive",
    "Managing Director Zenin Hive",
    "Bangalore Cloud Engineer",
    "AI Consultant Bangalore",
    "WordPress Developer India",
    "SEO Specialist Karnataka",
    "IT Support Consultant",
    "Theoretical Physics Researcher",
    "LaTeX Formatting",
    "Google Ads Campaign Manager",
    "Azure Cloud Administrator",
    "Microsoft 365 Entra ID"
  ],
  authors: [{ name: "Jeeva K K", url: "https://jeevakk.com" }],
  creator: "Jeeva K K",
  publisher: "Zenin Hive",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Jeeva K K | Managing Director, Zenin Hive",
    description:
      "Personal portfolio of Jeeva K K across Zenin Hive, cloud engineering, AI automation, websites, SEO, digital marketing, and physics research.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeeva K K | Managing Director, Zenin Hive",
    description:
      "Portfolio across founder work, cloud engineering, AI automation, websites, SEO, digital marketing, and independent physics research.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <SchemaMarkup />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
