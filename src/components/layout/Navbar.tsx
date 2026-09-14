import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/config";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cx, getInitials } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

const sectionIds = siteConfig.navItems.map((item) => item.href.replace("#", ""));

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cx(
        "sticky top-0 z-50 border-b transition-colors",
        isScrolled ? "border-border bg-base/90 backdrop-blur" : "border-transparent bg-base"
      )}
    >
      <div className="container-content flex h-16 items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight text-ink"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-xs font-bold text-accent-ink">
            {getInitials(profile.name)}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {siteConfig.navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cx(
                      "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      isActive ? "text-accent" : "text-muted hover:text-ink"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} activeId={activeId} onNavigate={() => setIsOpen(false)} />
    </header>
  );
}
