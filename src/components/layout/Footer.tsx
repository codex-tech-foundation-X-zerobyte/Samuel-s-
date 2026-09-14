import { SiGithub, SiX, SiDevdotto, SiHashnode, SiFiverr, SiUpwork, SiFreelancer } from "react-icons/si";
import { Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { siteConfig } from "@/data/config";
import { IconLink } from "@/components/ui/IconLink";
import { Badge } from "@/components/ui/Badge";

const currentYear = new Date().getFullYear();

export function Footer() {
  const isAvailable = profile.availability.openToWork || profile.availability.openToFreelance;

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-content grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-semibold text-ink">{siteConfig.brandName}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{profile.shortBio}</p>

          {isAvailable && (
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.availability.openToWork && <Badge variant="accent">Open to work</Badge>}
              {profile.availability.openToFreelance && (
                <Badge variant="accent">Available for freelance</Badge>
              )}
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <IconLink href={socialLinks.github} label="GitHub">
              <SiGithub size={16} />
            </IconLink>
            <IconLink href={socialLinks.linkedin} label="LinkedIn">
              <Linkedin size={16} />
            </IconLink>
            {socialLinks.twitter && (
              <IconLink href={socialLinks.twitter} label="X (Twitter)">
                <SiX size={16} />
              </IconLink>
            )}
            {socialLinks.devto && (
              <IconLink href={socialLinks.devto} label="Dev.to">
                <SiDevdotto size={16} />
              </IconLink>
            )}
            {socialLinks.hashnode && (
              <IconLink href={socialLinks.hashnode} label="Hashnode">
                <SiHashnode size={16} />
              </IconLink>
            )}
            {socialLinks.fiverr && (
              <IconLink href={socialLinks.fiverr} label="Fiverr">
                <SiFiverr size={16} />
              </IconLink>
            )}
            {socialLinks.upwork && (
              <IconLink href={socialLinks.upwork} label="Upwork">
                <SiUpwork size={16} />
              </IconLink>
            )}
            {socialLinks.freelancer && (
              <IconLink href={socialLinks.freelancer} label="Freelancer">
                <SiFreelancer size={16} />
              </IconLink>
            )}
          </div>

          {socialLinks.other && socialLinks.other.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
              {socialLinks.other.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted underline-offset-4 hover:text-accent hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <p className="text-sm font-medium text-ink">Navigate</p>
          <ul className="mt-4 space-y-2">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-muted transition-colors hover:text-accent">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-ink">Get in touch</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent">
                {profile.email}
              </a>
            </li>
            <li>{profile.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-content flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted sm:flex-row">
          <p>
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p>Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
