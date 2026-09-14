import type { Technology } from "@/types";

/**
 * TECHNOLOGY STACK
 * -----------------------------------------------------------------------
 * Add or remove entries freely. `icon` must match a key registered in
 * the ICONS map inside src/components/sections/TechStack.tsx — if you add
 * a technology with a new icon, register it there too.
 */
export const technologies: Technology[] = [
  { name: "HTML5", level: "Proficient", icon: "html5" },
  { name: "CSS3", level: "Proficient", icon: "css" },
  { name: "JavaScript", level: "Proficient", icon: "javascript" },
  { name: "TypeScript", level: "Comfortable", icon: "typescript" },
  { name: "React", level: "Proficient", icon: "react" },
  { name: "Node.js", level: "Comfortable", icon: "nodedotjs" },
  { name: "Go", level: "Comfortable", icon: "go" },
  { name: "Python", level: "Learning", icon: "python" },
  { name: "PHP", level: "Learning", icon: "php" },
  { name: "Supabase", level: "Comfortable", icon: "supabase" },
  { name: "PostgreSQL", level: "Comfortable", icon: "postgresql" },
  { name: "Docker", level: "Comfortable", icon: "docker" },
  { name: "Git", level: "Proficient", icon: "git" },
  { name: "GitHub", level: "Proficient", icon: "github" },
];
