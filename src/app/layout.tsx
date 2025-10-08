import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemePulse — playful memecoin landing with clear buy steps",
  description: "MemePulse — the memecoin that’s all fun and transparent. Simple steps to buy, clear tokenomics, and a welcoming, community-first vibe. Join the community.",
  keywords: ["memecoin", "crypto", "buy meme pulse", "tokenomics", "crypto meme", "community", "wallet", "DEX"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "MemePulse — playful memecoin landing with clear buy steps",
    description: "MemePulse — the memecoin that’s all fun and transparent. Simple steps to buy, clear tokenomics, and a welcoming, community-first vibe. Join the community.",
    type: "website",
    url: "/",
    siteName: "MemePulse",
    images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-m-1759921218798-0059bc18.jpg", width: 1200, height: 630, alt: "MemePulse logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MemePulse — playful memecoin landing with clear buy steps",
    description: "MemePulse — the memecoin that’s all fun and transparent. Simple steps to buy, clear tokenomics, and a welcoming, community-first vibe. Join the community.",
    images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-m-1759921218798-0059bc18.jpg" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}