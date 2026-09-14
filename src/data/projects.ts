import type { Project } from "@/types";

/**
 * PROJECTS
 * -----------------------------------------------------------------------
 * This is the most important content file. Add a new object to this
 * array for each project — the Projects section and ProjectCard component
 * will pick it up automatically, no UI code changes needed.
 *
 * image: drop a screenshot into /public (e.g. /public/projects/name.png)
 * and set `image` to "/projects/name.png". Leave it unset and a neutral
 * placeholder will render instead — never a broken image icon.
 *
 * To add another project, copy the shape below:
 *
 * {
 *   id: "your-project-slug",
 *   name: "Project Name",
 *   shortDescription: "One or two sentences — what it is and who it's for.",
 *   detailedDescription: "A longer paragraph or two.",
 *   type: "Web App", // see ProjectType in src/types/index.ts
 *   technologies: ["React", "TypeScript"],
 *   role: "Your role on the project.",
 *   liveUrl: undefined, // or a real URL
 *   githubUrl: undefined, // or a real URL
 *   image: undefined,
 *   status: "In Development", // see ProjectStatus in src/types/index.ts
 *   featured: false,
 * }
 */
export const projects: Project[] = [
  {
    id: "zerobyte-business",
    name: "Zerøbyte Business",
    shortDescription:
      "A modern business management SaaS designed to help small and growing businesses manage sales, inventory, staff, payments, and daily operations from one centralized platform.",
    detailedDescription:
      "Zerøbyte Business is a comprehensive business management SaaS built to help small and growing businesses manage their everyday operations from a single platform. It brings essential business tools together, reducing the need to rely on separate systems for tracking inventory, recording sales, managing staff, monitoring business performance, and handling day-to-day operations.\n\nThe platform provides business owners with a centralized dashboard where they can monitor important business activities and gain a clearer view of how their business is performing. It supports inventory management, sales tracking, staff and user management, business records, receipts, and financial insights, helping business owners make better decisions using their operational data.\n\nZerøbyte Business also provides separate experiences for business owners and workers, allowing owners to manage their business while giving authorized staff access to the tools and information relevant to their roles. The system is designed with security, scalability, responsiveness, and ease of use in mind.\n\nThe platform also incorporates modern web capabilities such as Progressive Web App support and offline functionality, allowing users to continue working in situations where internet connectivity may be limited and synchronize relevant data when connectivity is restored.\n\nBuilt with modern web technologies, Zerøbyte Business demonstrates the ability to design and develop a complete SaaS product — from authentication and database architecture to responsive interfaces, dashboards, business logic, deployment, and real-world usability.",
    type: "Web App",
    technologies: ["React", "TypeScript", "Supabase"],
    role: "Full-Stack Developer & Project Lead — led development across the frontend, backend, database architecture, authentication, business logic, responsive UI, and deployment. Also responsible for defining product direction, planning features, testing, identifying issues, and improving the platform based on real-world feedback.",
    liveDemoNote: "Coming soon",
    githubUrl: "https://codex-tech-foundation-x-zerobyte.github.io/zerobyte-business/",
    image: "",
    status: "Beta — Maintenance in progress",
    featured: true,
  },
];
