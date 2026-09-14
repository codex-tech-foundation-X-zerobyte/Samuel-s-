import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium leading-none",
        variant === "default" && "bg-surface2 text-muted",
        variant === "accent" && "bg-accent/15 text-accent",
        variant === "outline" && "border border-border text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
