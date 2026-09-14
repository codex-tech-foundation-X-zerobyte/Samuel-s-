import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section id="certifications" className="border-t border-border py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading title="Certifications & achievements" />

        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert) => (
            <Reveal key={cert.title}>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Award size={16} aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">
                  {cert.title}
                </h3>
                <p className="text-sm text-accent">{cert.organization}</p>
                <p className="mt-1 text-xs text-muted">{cert.date}</p>
                {cert.description && (
                  <p className="mt-3 text-sm leading-relaxed text-muted">{cert.description}</p>
                )}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:opacity-80"
                  >
                    View credential
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
