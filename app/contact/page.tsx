import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact | The Sunday Club",
  description:
    "Tell The Sunday Club about your brand, your goals and the creative partnership you're looking for.",
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}
