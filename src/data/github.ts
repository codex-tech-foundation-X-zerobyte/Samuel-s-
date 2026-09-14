import type { GithubProfile } from "@/types";

/**
 * GITHUB
 * -----------------------------------------------------------------------
 * Repositories are curated manually (no GitHub API call, no token needed).
 * Add an entry per repo you want to feature:
 *
 * {
 *   name: "repo-name",
 *   description: "What it is.",
 *   technologies: ["Go", "PostgreSQL"],
 *   stars: 0,       // optional — leave out if you'd rather not display a count
 *   forks: 0,       // optional
 *   githubUrl: "https://github.com/...",
 *   liveUrl: "https://...", // optional
 * }
 */
export const githubProfile: GithubProfile = {
  username: "codextech-lab",
  profileUrl: "https://github.com/codextech-lab",
  repos: [
    {
      name: "zerobyte-business",
      description:
        "Business management SaaS — inventory, sales, staff, and operations from one dashboard.",
      technologies: ["React", "TypeScript", "Supabase"],
      githubUrl: "https://codex-tech-foundation-x-zerobyte.github.io/zerobyte-business/",
    },
  ],
};
