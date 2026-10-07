import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact & Work With Us | The Sunday Club",
  description:
    "Tell The Sunday Club about your brand, goals and next project. Enquire about social media strategy, content production or an ongoing creative partnership.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}
