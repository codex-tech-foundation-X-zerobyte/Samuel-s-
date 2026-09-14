import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { getInitials } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="border-t border-border py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading title="What people say" />

        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((item) => (
            <Reveal key={item.name}>
              <figure className="rounded-2xl border border-border bg-surface p-6">
                <Quote className="text-accent" size={20} aria-hidden="true" />
                <blockquote className="mt-3 text-sm leading-relaxed text-muted">
                  {item.testimonial}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  {item.photo ? (
                    <img
                      src={item.photo}
                      alt={item.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface2 text-xs font-semibold text-accent">
                      {getInitials(item.name)}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-ink">{item.name}</p>
                    <p className="text-xs text-muted">
                      {item.role}
                      {item.company ? ` · ${item.company}` : ""}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
