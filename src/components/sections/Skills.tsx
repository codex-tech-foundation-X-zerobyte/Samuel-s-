import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

function groupByCategory() {
  const groups = new Map<string, typeof skills>();
  for (const skill of skills) {
    const existing = groups.get(skill.category) ?? [];
    existing.push(skill);
    groups.set(skill.category, existing);
  }
  return Array.from(groups.entries());
}

export function Skills() {
  if (skills.length === 0) return null;
  const grouped = groupByCategory();

  return (
    <section id="skills" className="border-t border-border py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading
          title="Skills"
          description="A working view of where my confidence sits today — not a scoreboard."
        />

        <div className="grid gap-10 sm:grid-cols-2">
          {grouped.map(([category, items], groupIndex) => (
            <Reveal key={category} delayMs={groupIndex * 60}>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-display text-sm font-semibold text-ink">{category}</h3>
                <div className="mt-5 space-y-5">
                  {items.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-baseline justify-between gap-3">
                        <span className="text-sm font-medium text-ink">{skill.name}</span>
                        <Badge variant="outline">{skill.level}</Badge>
                      </div>
                      <ProgressBar value={skill.proficiency} label={skill.name} />
                      <p className="mt-2 text-xs leading-relaxed text-muted">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
