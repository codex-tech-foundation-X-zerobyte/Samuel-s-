import { siteConfig } from "@/data/config";
import { cx } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  activeId: string;
  onNavigate: () => void;
}

export function MobileMenu({ isOpen, activeId, onNavigate }: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      className={cx(
        "overflow-hidden border-b border-border bg-base transition-[max-height] duration-300 ease-out md:hidden",
        isOpen ? "max-h-96" : "max-h-0"
      )}
    >
      <nav aria-label="Mobile" className="container-content flex flex-col py-2">
        {siteConfig.navItems.map((item) => {
          const id = item.href.replace("#", "");
          const isActive = activeId === id;
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              aria-current={isActive ? "page" : undefined}
              className={cx(
                "border-b border-border/60 py-3 text-sm font-medium last:border-b-0",
                isActive ? "text-accent" : "text-ink"
              )}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
