import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiGo,
  SiPython,
  SiPhp,
  SiSupabase,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { Code2 } from "lucide-react";
import { technologies } from "@/data/technologies";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Register new technologies here by adding their Simple Icons component,
 * keyed to match the `icon` value used in src/data/technologies.ts.
 */
const ICONS: Record<string, IconType> = {
  html5: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nodedotjs: SiNodedotjs,
  go: SiGo,
  python: SiPython,
  php: SiPhp,
  supabase: SiSupabase,
  postgresql: SiPostgresql,
  docker: SiDocker,
  git: SiGit,
  github: SiGithub,
};

export function TechStack() {
  if (technologies.length === 0) return null;

  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading
          title="Technology stack"
          description="Tools and languages I actually reach for day to day."
        />

        <Reveal>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {technologies.map((tech) => {
              const Icon = ICONS[tech.icon] ?? Code2;
              return (
                <li
                  key={tech.name}
                  className="flex flex-col items-center gap-2.5 rounded-xl border border-border bg-surface px-3 py-5 text-center transition-colors hover:border-accent"
                >
                  <Icon size={26} className="text-ink" aria-hidden="true" />
                  <span className="text-xs font-medium text-ink">{tech.name}</span>
                  <span className="text-[11px] text-muted">{tech.level}</span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
