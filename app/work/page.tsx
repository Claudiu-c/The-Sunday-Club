import type { Metadata } from "next";
import Work from "@/components/sections/Work";

export const metadata: Metadata = {
  title: "Our Work | The Sunday Club",
  description:
    "Discover The Sunday Club's creative perspective. Selected portfolios are available on request.",
};

export default function WorkPage() {
  return (
    <main>
      <Work variant="page" />
    </main>
  );
}
