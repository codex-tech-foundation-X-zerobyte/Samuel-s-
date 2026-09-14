import { Layers, MonitorSmartphone, Server, Database, Wrench, type LucideIcon } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/** Register new icons here to match the `icon` value used in src/data/services.ts. */
const ICONS: Record<string, LucideIcon> = {
  Layers,
  MonitorSmartphone,
  Server,
  Database,
};

export function Services() {
  if (services.length === 0) return null;

  return (
    <section id="services" className="border-t border-border py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading
          title="Services"
          description="What I can take off your plate."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = ICONS[service.icon] ?? Wrench;
            return (
              <Reveal key={service.title} delayMs={index * 60}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
