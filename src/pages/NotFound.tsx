import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { buttonClassName } from "@/components/ui/Button";

export function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center">
      <div className="container-content text-center">
        <p className="font-display text-sm font-medium text-accent">404</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          This page doesn't exist.
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-muted">
          The page you're looking for may have moved or never existed. Head back to the homepage.
        </p>
        <div className="mt-8 flex justify-center">
          <Link to="/" className={buttonClassName("primary")}>
            <ArrowLeft size={16} aria-hidden="true" />
            Back to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
