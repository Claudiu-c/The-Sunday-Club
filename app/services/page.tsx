import type { Metadata } from "next";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Services | The Sunday Club",
  description:
    "Find your way into The Sunday Club: brand strategy with The Blueprint, content production with The Sunday Session, or an ongoing partnership with The Club Engine.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <Services />
    </main>
  );
}
