/**
 * SITE CONFIGURATION
 * -----------------------------------------------------------------------
 * Non-personal, structural settings live here. Personal information lives
 * in ./profile.ts. Content for each section lives in its own data file
 * (skills.ts, projects.ts, experience.ts, etc.) — see README.md for the
 * full map of "what to edit where."
 *
 * The visual accent color is controlled from src/index.css (--color-accent)
 * so it can change without touching component code.
 */

export const siteConfig = {
  /** Used in the browser tab, footer copyright, and meta tags. */
  brandName: "Okpala Chimaobi Samuel",

  /** Primary navigation. Keep this short — see brief section 13. */
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],

  /**
   * Sections not in the primary nav but still rendered on the page (in
   * this order, after Projects). Each section hides itself automatically
   * if its data file is empty.
   */
  secondarySections: ["education", "certifications", "github", "testimonials"],
};

export type NavItem = (typeof siteConfig.navItems)[number];
