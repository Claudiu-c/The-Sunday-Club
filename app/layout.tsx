import type { Metadata } from "next";
import { Montserrat, Playfair_Display_SC } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000"),
  ),

  title: "The Sunday Club | Creative Social Media Agency",

  description:
    "Strategy. Content. Social. The Sunday Club creates brands people want to be part of.",

  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "The Sunday Club",
    title: "The Sunday Club | Creative Social Media Agency",
    description:
      "Creating brands people want to be part of. Strategy, creative direction and content by The Sunday Club.",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Sunday Club | Creative Social Media Agency",
    description:
      "Creating brands people want to be part of. Strategy. Content. Social.",
  },

  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${playfair.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
