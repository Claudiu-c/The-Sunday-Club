import type { Metadata } from "next";
import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: "The People | The Sunday Club",
  description:
    "Meet Maria and Andreea, the founders behind The Sunday Club, and discover why they built the agency.",
};

export default function AboutPage() {
  return (
    <main>
      <About variant="page" />
    </main>
  );
}
