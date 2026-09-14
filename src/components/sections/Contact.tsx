import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Loader2, CheckCircle2, AlertCircle, Linkedin } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { submitContactForm, isContactFormConfigured, type ContactSubmitResult } from "@/lib/contact";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconLink } from "@/components/ui/IconLink";
import { Reveal } from "@/components/ui/Reveal";

type Status = "idle" | "submitting" | ContactSubmitResult["status"];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setStatus("submitting");
    const result = await submitContactForm(values);
    setStatus(result.status);

    if (result.status === "sent" || result.status === "opened-email-client") {
      form.reset();
    }
    if (result.status === "error") {
      setErrorMessage(result.message);
    }
  }

  return (
    <section id="contact" className="border-t border-border py-20 sm:py-28">
      <div className="container-content grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            title="Contact"
            description="Have a project in mind? I'd like to hear about it."
          />

          <ul className="space-y-4">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm text-ink transition-colors hover:text-accent"
              >
                <Mail size={16} className="text-accent" aria-hidden="true" />
                {profile.email}
              </a>
            </li>
            {profile.phone && (
              <li className="flex items-center gap-3 text-sm text-ink">
                <Phone size={16} className="text-accent" aria-hidden="true" />
                {profile.phone}
              </li>
            )}
            <li className="flex items-center gap-3 text-sm text-ink">
              <MapPin size={16} className="text-accent" aria-hidden="true" />
              {profile.location}
            </li>
          </ul>

          <div className="mt-8 flex gap-3">
            <IconLink href={socialLinks.github} label="GitHub">
              <SiGithub size={16} />
            </IconLink>
            <IconLink href={socialLinks.linkedin} label="LinkedIn">
              <Linkedin size={16} />
            </IconLink>
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {status === "submitting" && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
              Send message
            </button>

            <div role="status" aria-live="polite">
              {status === "sent" && (
                <p className="flex items-center gap-2 text-sm text-accent">
                  <CheckCircle2 size={16} aria-hidden="true" />
                  Message sent — thanks for reaching out.
                </p>
              )}
              {status === "opened-email-client" && (
                <p className="flex items-center gap-2 text-sm text-muted">
                  <CheckCircle2 size={16} className="text-accent" aria-hidden="true" />
                  Opening your email client with the message pre-filled.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-500">
                  <AlertCircle size={16} aria-hidden="true" />
                  {errorMessage}
                </p>
              )}
              {!isContactFormConfigured && status === "idle" && (
                <p className="text-xs text-muted">
                  A message-sending service isn't connected yet, so sending will open your email
                  client instead. See .env.example to connect Formspree.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
