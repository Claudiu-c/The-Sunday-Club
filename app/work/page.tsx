import type { Metadata } from "next";
import Work from "@/components/sections/Work";

export const metadata: Metadata = {
  title: "Our Work & Portfolio Requests | The Sunday Club",
  description:
    "Take a closer look at The Sunday Club. Request selected portfolio examples and explore our approach to social media and creative content.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <main>
      <Work variant="page" />
    </main>
  );
}
