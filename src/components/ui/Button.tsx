import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-accent text-accent-ink hover:opacity-90",
  secondary: "border border-border text-ink hover:border-accent hover:text-accent",
  ghost: "text-ink hover:text-accent",
};

const sharedClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-accent";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
}

export function buttonClassName(variant: Variant = "primary", className?: string) {
  return cx(sharedClasses, variantClasses[variant], className);
}

/** A clickable action rendered as a real <button>. */
export function Button({ variant = "primary", className, children, ...rest }: ButtonProps) {
  return (
    <button className={cx(sharedClasses, variantClasses[variant], className)} {...rest}>
      {children}
    </button>
  );
}

/** A clickable action rendered as a real <a> — use for navigation/external links. */
export function ButtonLink({ variant = "primary", className, children, ...rest }: ButtonLinkProps) {
  return (
    <a className={cx(sharedClasses, variantClasses[variant], className)} {...rest}>
      {children}
    </a>
  );
}
