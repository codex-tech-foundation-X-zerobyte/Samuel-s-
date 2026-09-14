import type { Service } from "@/types";

/**
 * SERVICES
 * -----------------------------------------------------------------------
 * What you can offer professionally. Edit titles/descriptions freely, or
 * remove entries you don't want to offer yet. `icon` is a lucide-react
 * icon name — see the full list at https://lucide.dev/icons.
 */
export const services: Service[] = [
  {
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications — from responsive frontends to the backend logic, database, and auth that power them.",
    icon: "Layers",
  },
  {
    title: "Frontend Development",
    description:
      "Building clean, responsive, accessible interfaces with HTML, CSS, JavaScript, TypeScript, and React.",
    icon: "MonitorSmartphone",
  },
  {
    title: "Backend & API Development",
    description:
      "Designing and building server-side logic and APIs with Node.js and Go — authentication, business logic, and data flow.",
    icon: "Server",
  },
  {
    title: "Database Design",
    description:
      "Structuring and managing application data with Supabase and PostgreSQL, including auth and access rules.",
    icon: "Database",
  },
];
