import About from "@/components/sections/About";
import ContactPreview from "@/components/sections/ContactPreview";
import Hero from "@/components/sections/Hero";
import Positioning from "@/components/sections/Positioning";
import Process from "@/components/sections/Process";
import ServicesPreview from "@/components/sections/ServicesPreview";
import Work from "@/components/sections/Work";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Sunday Club | Creative Social Media Agency",
  description:
    "Strategy, creative direction and content for brands people want to be part of. Discover The Sunday Club, a boutique creative social media agency.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Positioning />
      <ServicesPreview />
      <Work />
      <Process />
      <About />
      <ContactPreview />
    </main>
  );
}
