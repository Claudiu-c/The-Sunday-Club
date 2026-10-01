import type { Metadata } from "next";
import Positioning from "@/components/sections/Positioning";
import Process from "@/components/sections/Process";

export const metadata: Metadata = {
  title: "Our Approach | The Sunday Club",
  description:
    "Our approach to strategy, creative direction and content that builds brands people want to follow.",
};

export default function ApproachPage() {
  return (
    <main>
      <Positioning variant="page" showApproachLink={false} />
      <Process detailed />
    </main>
  );
}
