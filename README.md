# Okpala Chimaobi Samuel — Developer Portfolio

A professional personal developer portfolio built with **React, TypeScript, Vite, and Tailwind CSS**. All personal content — profile info, skills, projects, experience, links — lives in a centralized `src/data/` folder, separate from the UI, so it can be updated without touching component code.

---

## 1. Features

- Centralized, typed data layer (`src/data/`) — one file per content type
- Light/dark theme, persisted, with a single-source accent color (`src/index.css`)
- Fully responsive (mobile → large desktop)
- Sections that hide themselves automatically when their data is empty (Experience, Education, Certifications, Testimonials, GitHub)
- Accessible: semantic HTML, keyboard navigation, visible focus states, `prefers-reduced-motion` support, labeled form fields
- SEO-ready: meta description, Open Graph + Twitter card tags, canonical URL slot, `robots.txt`, `sitemap.xml`, favicon
- Functional contact form (Formspree-ready, with a working `mailto:` fallback if not configured — never fakes a successful send)
- No secrets in frontend code, no external analytics, no unnecessary dependencies
- 404 page for unmatched routes

---

## 2. Tech stack

- **React 18 + TypeScript**
- **Vite** — build tool and dev server
- **Tailwind CSS** — styling, driven by CSS variables for theming
- **react-router-dom** — routing (single page + 404 fallback)
- **lucide-react** — UI icons
- **react-icons/si** (Simple Icons) — technology/brand logos

No animation library, no UI kit, no state-management library — the site doesn't need them, and every dependency above is used directly and visibly in the code.

---

## 3. Project structure

```
src/
  data/            ← EDIT YOUR CONTENT HERE (see map below)
  types/           ← Shared TypeScript interfaces for all data
  components/
    layout/        ← Navbar, Footer, ThemeToggle, MobileMenu
    ui/            ← Small reusable primitives (Button, Badge, ProgressBar, ...)
    sections/      ← One component per page section (Hero, Projects, Contact, ...)
  pages/           ← Home.tsx (assembles sections), NotFound.tsx
  hooks/           ← useTheme, useInView (scroll reveal), useActiveSection (scrollspy)
  lib/             ← utils.ts, contact.ts (form submission logic)
  index.css        ← Theme tokens (colors), global styles
  App.tsx          ← Router + persistent layout
  main.tsx         ← Entry point
public/            ← favicon, og-image, robots.txt, sitemap.xml
```

---

## 4. Where to edit your information

| What | File |
|---|---|
| Name, title, bio, email, phone, location, availability, resume/photo paths | `src/data/profile.ts` |
| "My Story" paragraphs | `src/data/story.ts` |
| Skills + proficiency | `src/data/skills.ts` |
| Technology stack icons/list | `src/data/technologies.ts` |
| **Projects** (add new ones here) | `src/data/projects.ts` |
| Work experience | `src/data/experience.ts` |
| Education | `src/data/education.ts` |
| Certifications/achievements | `src/data/certifications.ts` |
| Services you offer | `src/data/services.ts` |
| GitHub username + featured repos | `src/data/github.ts` |
| Social/professional links | `src/data/social.ts` |
| Testimonials (real ones only) | `src/data/testimonials.ts` |
| Nav items, site-wide structure | `src/data/config.ts` |
| Accent color & light/dark palette | `src/index.css` (top of file, clearly marked) |
| Page title/meta description/OG image | `index.html` |

Each data file has comments explaining its shape and how to add entries. **Sections with empty data arrays (Certifications, Testimonials, Experience, GitHub) hide themselves automatically** — you don't need to delete any component code.

### Adding your profile photo and CV

1. Drop your photo into `public/` (e.g. `public/me.jpg`) and set `profileImage: "/me.jpg"` in `src/data/profile.ts`.
2. Drop your CV PDF into `public/` (e.g. `public/resume.pdf`) and set `resumeUrl: "/resume.pdf"`. The "Download CV" button appears automatically once this is set.

### Adding a project screenshot

Drop the image into `public/projects/your-image.png` and set `image: "/projects/your-image.png"` on that project in `src/data/projects.ts`. Until you do, a clean placeholder is shown instead of a broken image.

---

## 5. Running locally

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev
```

Visit the URL Vite prints (usually `http://localhost:5173`).

---

## 6. Building for production

```bash
npm run build
```

This type-checks the project (`tsc -b`) and outputs a production build to `dist/`. Preview it locally with:

```bash
npm run preview
```

---

## 7. Environment variables (contact form)

The contact form works out of the box using a `mailto:` fallback — no setup required. To have submissions land in your inbox automatically instead:

1. Create a free form at [Formspree](https://formspree.io) and copy your endpoint (e.g. `https://formspree.io/f/abcdwxyz`).
2. Copy `.env.example` to `.env`.
3. Set `VITE_FORMSPREE_ENDPOINT` to your endpoint.
4. Restart the dev server / rebuild.

See `.env.example` for details. **Never** put secret or service-role keys in `.env` files used by Vite — anything prefixed `VITE_` is bundled into the public frontend. Formspree's endpoint is designed to be called from the browser, so it's safe here.

---

## 8. Deployment

### GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

`.gitignore` already excludes `node_modules/`, `dist/`, and all `.env*` files.

### Vercel

1. Import the GitHub repo at [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Vite** (auto-detected).
3. Build command: `npm run build` — Output directory: `dist` (auto-detected).
4. Add `VITE_FORMSPREE_ENDPOINT` under Project → Settings → Environment Variables if you're using it.
5. Deploy.

### Netlify

1. Import the GitHub repo at [app.netlify.com/start](https://app.netlify.com/start).
2. Build command: `npm run build` — Publish directory: `dist`.
3. Add `VITE_FORMSPREE_ENDPOINT` under Site settings → Environment variables if you're using it.
4. Because this is a single-page app with client-side routing, add a `public/_redirects` file containing:
   ```
   /*  /index.html  200
   ```
   (Vercel handles this automatically; Netlify needs it explicitly.)

---

## 9. Before going live — update these placeholders

- `index.html`: replace `https://example.com/` in the canonical/OG/Twitter tags with your real domain.
- `public/robots.txt` and `public/sitemap.xml`: replace `https://example.com` with your real domain.
- `public/og-image.png`: currently a generated placeholder — replace with a real 1200×630 social preview image once you have one.
- `src/data/social.ts`: add your LinkedIn URL (the icon is already styled and reserved for it).
- `src/data/profile.ts`: add your profile photo and CV once ready.

---

## 10. Customization notes

- **Accent color**: change `--color-accent` (and `--color-accent-ink`) in `src/index.css` — every button, link, badge, and highlight across the site reads from this one token.
- **Adding a project**: copy the template comment at the top of `src/data/projects.ts`.
- **Adding a technology icon**: add the entry to `src/data/technologies.ts`, then register its `react-icons/si` component in the `ICONS` map inside `src/components/sections/TechStack.tsx`.
- **Adding a service icon**: same pattern, using `lucide-react` icons, registered in `src/components/sections/Services.tsx`.

---

## 11. What's intentionally not included

- No fabricated projects, clients, certifications, or statistics — every claim in this portfolio comes directly from information provided by the site owner.
- No analytics or third-party tracking scripts.
- No backend server — the contact form is a legitimate frontend-only implementation (Formspree or `mailto:`), not a simulated one.
#   S a m u e l - s -  
 