export interface Profile {
  name: string;
  title: string;
  shortBio: string;
  location: string;
  email: string;
  phone?: string;
  /** Path under /public, or a full URL. Leave empty string to show the initials fallback. */
  profileImage: string;
  /** Path under /public, or a full URL to a hosted PDF. Leave empty until you have one. */
  resumeUrl: string;
  availability: {
    openToWork: boolean;
    openToFreelance: boolean;
  };
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "Database"
  | "DevOps"
  | "Cloud"
  | "UI/UX"
  | "Cybersecurity"
  | "Tools"
  | "Other";

export type ExperienceLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export interface Skill {
  name: string;
  category: SkillCategory;
  /** 0–100. A confidence indicator, not a measured statistic. */
  proficiency: number;
  level: ExperienceLevel;
  description: string;
}

export type TechLevel = "Learning" | "Comfortable" | "Proficient";

export interface Technology {
  name: string;
  level: TechLevel;
  /** Key into the icon map in TechStack.tsx (react-icons/si name, lowercase without prefix). */
  icon: string;
}

export type ProjectType =
  | "Web App"
  | "Mobile App"
  | "Desktop App"
  | "API / Backend"
  | "Landing Page"
  | "Tool / Utility"
  | "Other";

/**
 * Free-text status label shown as a badge on the project card.
 * Suggested values: "Live", "In Development", "Beta", "Maintenance",
 * "Completed", "Archived" — or combine them, e.g. "Beta — Maintenance",
 * to describe the project's real state accurately.
 */
export type ProjectStatus = string;

export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  detailedDescription: string;
  type: ProjectType;
  technologies: string[];
  role: string;
  liveUrl?: string;
  /** Shown instead of a live link when there's no URL yet, e.g. "Coming soon". */
  liveDemoNote?: string;
  githubUrl?: string;
  /** Path under /public, or a full URL. Leave empty to show a placeholder. */
  image?: string;
  status: ProjectStatus;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  course: string;
  startYear: string;
  endYear: string;
  description?: string;
}

export interface Certification {
  title: string;
  organization: string;
  date: string;
  credentialUrl?: string;
  description?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  devto?: string;
  hashnode?: string;
  fiverr?: string;
  upwork?: string;
  freelancer?: string;
  other?: { label: string; url: string }[];
}

export interface GithubRepo {
  name: string;
  description: string;
  technologies: string[];
  stars?: number;
  forks?: number;
  githubUrl: string;
  liveUrl?: string;
}

export interface GithubProfile {
  username: string;
  profileUrl: string;
  repos: GithubRepo[];
}

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  testimonial: string;
  photo?: string;
}
