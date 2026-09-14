import { cx } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cx("mb-12 max-w-2xl", align === "center" && "mx-auto text-center")}>
      <div
        className={cx(
          "mb-4 h-[3px] w-10 rounded-full bg-accent",
          align === "center" && "mx-auto"
        )}
        aria-hidden="true"
      />
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}
