import { ExternalLink, Github, ImageOff } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="flex h-48 items-center justify-center border-b border-border bg-surface2">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} preview`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted">
            <ImageOff size={22} aria-hidden="true" />
            <span className="text-xs">Preview coming soon</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge variant="outline">{project.type}</Badge>
          <Badge variant="accent">{project.status}</Badge>
        </div>

        <h3 className="font-display text-xl font-semibold text-ink">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.shortDescription}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-ink">
          <span className="font-medium">My role: </span>
          <span className="text-muted">{project.role}</span>
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-5">
          {project.liveUrl ? (
            <ButtonLink
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="px-4 py-2 text-xs"
            >
              Live demo
              <ExternalLink size={14} aria-hidden="true" />
            </ButtonLink>
          ) : project.liveDemoNote ? (
            <span className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-xs font-medium text-muted">
              Live demo: {project.liveDemoNote}
            </span>
          ) : null}

          {project.githubUrl && (
            <ButtonLink
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="px-4 py-2 text-xs"
            >
              <Github size={14} aria-hidden="true" />
              View code
            </ButtonLink>
          )}
        </div>
      </div>
    </article>
  );
}
