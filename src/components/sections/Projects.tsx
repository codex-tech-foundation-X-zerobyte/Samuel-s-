import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  if (projects.length === 0) return null;

  return (
    <section id="projects" className="border-t border-border py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading
          title="Projects"
          description="A closer look at what I've built, the problems behind them, and my part in building them."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delayMs={index * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
