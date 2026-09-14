import { SiGithub } from "react-icons/si";
import { ExternalLink, Star, GitFork } from "lucide-react";
import { githubProfile } from "@/data/github";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function GithubSection() {
  if (!githubProfile.username) return null;

  return (
    <section id="github" className="border-t border-border py-20 sm:py-28">
      <div className="container-content">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
          <SectionHeading
            title="GitHub"
            description="Selected repositories — curated here directly, not pulled live from the API."
          />
          <ButtonLink
            href={githubProfile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            <SiGithub size={16} aria-hidden="true" />@{githubProfile.username}
          </ButtonLink>
        </div>

        {githubProfile.repos.length === 0 ? (
          <p className="text-sm text-muted">Repositories will be featured here soon.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {githubProfile.repos.map((repo, index) => (
              <Reveal key={repo.name} delayMs={index * 60}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
                  <h3 className="font-display text-base font-semibold text-ink">{repo.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {repo.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {repo.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  {(repo.stars !== undefined || repo.forks !== undefined) && (
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                      {repo.stars !== undefined && (
                        <span className="inline-flex items-center gap-1">
                          <Star size={13} aria-hidden="true" /> {repo.stars}
                        </span>
                      )}
                      {repo.forks !== undefined && (
                        <span className="inline-flex items-center gap-1">
                          <GitFork size={13} aria-hidden="true" /> {repo.forks}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="mt-5 flex flex-wrap gap-3 border-t border-border pt-5">
                    <a
                      href={repo.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:opacity-80"
                    >
                      Repository <ExternalLink size={13} aria-hidden="true" />
                    </a>
                    {repo.liveUrl && (
                      <a
                        href={repo.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent"
                      >
                        Live <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
