import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollIndicator } from "@/components/layout/scroll-indicator";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Differentials } from "@/components/sections/differentials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <ScrollIndicator />
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Differentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
