import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

interface IconLinkProps {
  href?: string;
  label: string;
  children: ReactNode;
  className?: string;
}

/**
 * Renders as a real link when `href` is provided. When it isn't (e.g.
 * LinkedIn before the URL is added), it renders the same icon in a
 * visibly inactive state rather than a dead/broken link.
 */
export function IconLink({ href, label, children, className }: IconLinkProps) {
  const baseClasses = cx(
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors",
    className
  );

  if (!href) {
    return (
      <span
        className={cx(baseClasses, "cursor-not-allowed text-muted/40")}
        aria-label={`${label} (link coming soon)`}
        title={`${label} — coming soon`}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={cx(baseClasses, "text-muted hover:border-accent hover:text-accent")}
    >
      {children}
    </a>
  );
}
