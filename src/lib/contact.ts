import { profile } from "@/data/profile";

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactSubmitResult =
  | { status: "sent" }
  | { status: "opened-email-client" }
  | { status: "error"; message: string };

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

/**
 * Submits the contact form.
 *
 * - If VITE_FORMSPREE_ENDPOINT is set (see .env.example), the message is
 *   POSTed directly to Formspree from the browser — no backend required.
 * - Otherwise, this opens the visitor's email client with a pre-filled
 *   message as a functional fallback. Nothing here fakes a successful
 *   send when no real service is configured.
 */
export async function submitContactForm(
  values: ContactFormValues
): Promise<ContactSubmitResult> {
  if (FORMSPREE_ENDPOINT) {
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        return { status: "sent" };
      }
      return {
        status: "error",
        message: "The message service didn't accept the request. Please try again shortly.",
      };
    } catch {
      return {
        status: "error",
        message: "Couldn't reach the message service — check your connection and try again.",
      };
    }
  }

  const body = `${values.message}\n\n— ${values.name} (${values.email})`;
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    values.subject || "Portfolio contact"
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
  return { status: "opened-email-client" };
}

export const isContactFormConfigured = Boolean(FORMSPREE_ENDPOINT);
