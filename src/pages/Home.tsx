import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { ExperienceSection } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Services } from "@/components/sections/Services";
import { GithubSection } from "@/components/sections/GithubSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCta } from "@/components/sections/FinalCta";
import { Contact } from "@/components/sections/Contact";

export function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Projects />
      <ExperienceSection />
      <Education />
      <Certifications />
      <Services />
      <GithubSection />
      <Testimonials />
      <FinalCta />
      <Contact />
    </main>
  );
}
