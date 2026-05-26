import type { Metadata } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const sansFont = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serifFont = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeeva K K | Managing Director, Zenin Hive",
  description:
    "Portfolio of Jeeva K K, Managing Director of Zenin Hive, cloud engineer, AI consultant, WordPress developer, SEO specialist, digital marketing strategist, physicist, and independent theoretical particle physics researcher.",
  metadataBase: new URL("https://jeevakk.com"),
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
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

