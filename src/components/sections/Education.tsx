import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  if (education.length === 0) return null;

  return (
    <section id="education" className="border-t border-border py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading title="Education" />

        <div className="space-y-6">
          {education.map((entry) => (
            <Reveal key={entry.institution}>
              <div className="flex gap-4 rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <GraduationCap size={18} aria-hidden="true" />
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {entry.course}
                    </h3>
                    <span className="text-sm text-muted">
                      {entry.startYear} — {entry.endYear}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-accent">{entry.institution}</p>
                  {entry.description && (
                    <p className="mt-3 text-sm leading-relaxed text-muted">{entry.description}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
