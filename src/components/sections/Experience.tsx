import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function ExperienceSection() {
  if (experience.length === 0) return null;

  return (
    <section id="experience" className="border-t border-border py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading title="Experience" />

        <div className="space-y-8">
          {experience.map((role) => (
            <Reveal key={`${role.company}-${role.startDate}`}>
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{role.role}</h3>
                    <p className="text-sm text-accent">{role.company}</p>
                  </div>
                  <Badge variant="outline">
                    {role.startDate} — {role.endDate}
                  </Badge>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted">{role.description}</p>

                {role.responsibilities.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {role.responsibilities.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {role.technologies.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border pt-5">
                    {role.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
