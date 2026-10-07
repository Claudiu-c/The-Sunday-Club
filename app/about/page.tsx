import type { Metadata } from "next";
import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: "Meet Maria & Andreea | The Sunday Club",
  description:
    "Meet Maria and Andreea, the founders of The Sunday Club, and discover the thinking behind a creative agency built for brands with personality.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <About variant="page" />
    </main>
  );
}
