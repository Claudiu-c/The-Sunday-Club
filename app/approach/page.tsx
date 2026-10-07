import type { Metadata } from "next";
import Positioning from "@/components/sections/Positioning";
import Process from "@/components/sections/Process";

export const metadata: Metadata = {
  title: "Our Approach | The Sunday Club",
  description:
    "Discover how The Sunday Club brings strategy, creative direction and content together, from the first conversation to production, launch and learning.",
  alternates: {
    canonical: "/approach",
  },
};

export default function ApproachPage() {
  return (
    <main>
      <Positioning variant="page" showApproachLink={false} />
      <Process detailed />
    </main>
  );
}
