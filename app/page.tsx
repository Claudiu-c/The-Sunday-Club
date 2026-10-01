import About from "@/components/sections/About";
import ContactPreview from "@/components/sections/ContactPreview";
import Hero from "@/components/sections/Hero";
import Positioning from "@/components/sections/Positioning";
import Process from "@/components/sections/Process";
import ServicesPreview from "@/components/sections/ServicesPreview";
import Work from "@/components/sections/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Positioning />
      <ServicesPreview />
      <Work />
      <Process />
      <About />
      <ContactPreview />
    </main>
  );
}
