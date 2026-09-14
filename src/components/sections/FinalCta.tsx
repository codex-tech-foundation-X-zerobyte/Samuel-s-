import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="container-content">
        <Reveal>
          <div className="rounded-2xl border border-border bg-surface px-8 py-14 text-center sm:px-14">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
              Let's build something useful — reach out and tell me what you're working on.
            </p>
            <div className="mt-8">
              <ButtonLink href={`mailto:${profile.email}`} variant="primary">
                Start a conversation
                <ArrowRight size={16} aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
