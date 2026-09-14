import { profile } from "@/data/profile";
import { myStory } from "@/data/story";
import { education } from "@/data/education";
import { getInitials } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

export function About() {
  const currentEducation = education[0];

  return (
    <section id="about" className="border-t border-border py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading
          title="About"
          description="A quick look at who I am and how I got here."
        />

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-6">
              {profile.profileImage ? (
                <img
                  src={profile.profileImage}
                  alt={profile.name}
                  className="mb-6 h-40 w-40 rounded-xl object-cover"
                />
              ) : (
                <div
                  className="mb-6 flex h-40 w-40 items-center justify-center rounded-xl bg-surface2 font-display text-4xl font-semibold text-accent"
                  aria-hidden="true"
                >
                  {getInitials(profile.name)}
                </div>
              )}

              <p className="font-display text-lg font-semibold text-ink">{profile.name}</p>
              <p className="text-sm text-muted">{profile.title}</p>

              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-t border-border pt-3">
                  <dt className="text-muted">Location</dt>
                  <dd className="text-right text-ink">{profile.location}</dd>
                </div>
                {currentEducation && (
                  <div className="flex justify-between gap-4 border-t border-border pt-3">
                    <dt className="text-muted">Studying</dt>
                    <dd className="text-right text-ink">{currentEducation.course}</dd>
                  </div>
                )}
              </dl>

              {(profile.availability.openToWork || profile.availability.openToFreelance) && (
                <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-6">
                  {profile.availability.openToWork && <Badge variant="accent">Open to work</Badge>}
                  {profile.availability.openToFreelance && (
                    <Badge variant="accent">Available for freelance</Badge>
                  )}
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="space-y-5">
              {myStory.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
