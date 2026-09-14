import type { SocialLinks } from "@/types";

/**
 * SOCIAL & PROFESSIONAL LINKS
 * -----------------------------------------------------------------------
 * Only fields with a real URL are rendered as clickable links elsewhere
 * in the app — leave a field empty/undefined to hide it entirely.
 *
 * `linkedin` is the one exception: it's kept visible in a styled, inactive
 * state (per your request) until you add the URL, so the icon slot is
 * reserved and ready — see Navbar/Footer/Contact for where it's used.
 */
export const socialLinks: SocialLinks = {
  github: "https://github.com/codextech-lab",
  linkedin: "", // add your LinkedIn URL here — the icon is already styled and reserved
  twitter: "",
  devto: "",
  hashnode: "",
  fiverr: "",
  upwork: "",
  freelancer: "",
  other: [],
};
