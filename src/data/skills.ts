import type { Skill } from "@/types";

/**
 * SKILLS
 * -----------------------------------------------------------------------
 * Add, remove, or edit entries freely — the Skills section renders
 * whatever is in this array, grouped by category.
 *
 * `proficiency` is a confidence indicator (0–100) for the visual bar,
 * not a measured statistic — adjust it to reflect how you actually feel
 * about each skill. Starting values below are conservative estimates;
 * change them to match your own judgment.
 */
export const skills: Skill[] = [
  {
    name: "HTML & CSS",
    category: "Frontend",
    proficiency: 85,
    level: "Advanced",
    description: "Structuring and styling accessible, responsive interfaces from scratch.",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    proficiency: 82,
    level: "Advanced",
    description: "Core language for building interactive UI and application logic.",
  },
  {
    name: "React",
    category: "Frontend",
    proficiency: 75,
    level: "Advanced",
    description: "Building component-driven, responsive web applications and dashboards.",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    proficiency: 68,
    level: "Intermediate",
    description: "Adding type safety to frontend and backend codebases as they grow.",
  },
  {
    name: "Node.js",
    category: "Backend",
    proficiency: 72,
    level: "Advanced",
    description: "Building REST APIs, authentication flows, and server-side logic.",
  },
  {
    name: "Go",
    category: "Backend",
    proficiency: 60,
    level: "Intermediate",
    description: "Writing backend services where performance and clear structure matter.",
  },
  {
    name: "Python",
    category: "Backend",
    proficiency: 35,
    level: "Beginner",
    description: "Comfortable with scripting and basic backend tasks; still building depth here.",
  },
  {
    name: "PHP",
    category: "Backend",
    proficiency: 30,
    level: "Beginner",
    description: "Basic working knowledge, picked up alongside other backend work.",
  },
  {
    name: "Supabase / PostgreSQL",
    category: "Database",
    proficiency: 65,
    level: "Intermediate",
    description: "Designing schemas, auth, and row-level security for real applications.",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    proficiency: 80,
    level: "Advanced",
    description: "Version control, branching workflows, and collaborating on shared codebases.",
  },
];
