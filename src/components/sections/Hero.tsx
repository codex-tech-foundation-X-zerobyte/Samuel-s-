import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { technologies } from "@/data/technologies";
import { ButtonLink } from "@/components/ui/Button";

export function Hero() {
  const availabilityLabel = profile.availability.openToWork
    ? "Open to work"
    : profile.availability.openToFreelance
      ? "Available for freelance"
      : null;

  const coreStack = technologies
    .filter((tech) => tech.level !== "Learning")
    .slice(0, 6)
    .map((tech) => tech.name);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container-content grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:py-32">
        <div className="animate-fade-up">
          {availabilityLabel && (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {availabilityLabel}
            </div>
          )}

          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-display text-xl font-medium text-accent sm:text-2xl">
            {profile.title}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.shortBio}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink href="#projects" variant="primary">
              View my work
              <ArrowRight size={16} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Contact me
            </ButtonLink>
            {profile.resumeUrl && (
              <ButtonLink href={profile.resumeUrl} variant="ghost" download>
                Download CV
                <Download size={16} aria-hidden="true" />
              </ButtonLink>
            )}
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:150ms]">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <dl className="space-y-5 font-mono text-sm">
              <div className="flex items-start justify-between gap-4">
                <dt className="text-muted">location</dt>
                <dd className="flex items-center gap-1.5 text-right text-ink">
                  <MapPin size={14} className="shrink-0 text-accent" aria-hidden="true" />
                  {profile.location}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-t border-border pt-5">
                <dt className="text-muted">focus</dt>
                <dd className="text-right text-ink">Full-stack web &amp; SaaS</dd>
              </div>
              <div className="border-t border-border pt-5">
                <dt className="mb-2 text-muted">stack</dt>
                <dd className="flex flex-wrap justify-end gap-1.5">
                  {coreStack.map((name) => (
                    <span
                      key={name}
                      className="rounded border border-border px-2 py-0.5 text-xs text-ink"
                    >
                      {name}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
