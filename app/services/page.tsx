import type { Metadata } from "next";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Services | The Sunday Club",
  description:
    "Explore The Blueprint, The Sunday Session and The Club Engine — three ways to work with The Sunday Club.",
};

export default function ServicesPage() {
  return (
    <main>
      <Services />
    </main>
  );
}
