import type { Metadata } from "next";
import { Montserrat, Playfair_Display_SC } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { siteUrl, siteName, siteDescription, isIndexable } from "@/lib/site";

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
  metadataBase: new URL(siteUrl),

  title: "The Sunday Club | Creative Social Media Agency",

  description: siteDescription,

  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName,
    title: "The Sunday Club | Creative Social Media Agency",
    description: siteDescription,
  },

  twitter: {
    card: "summary_large_image",
    title: "The Sunday Club | Creative Social Media Agency",
    description: siteDescription,
    images: ["/opengraph-image.png"],
  },

  robots: {
    index: isIndexable,
    follow: isIndexable,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body id="top" className={`${montserrat.variable} ${playfair.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
