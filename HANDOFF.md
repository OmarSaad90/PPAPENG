# PPA P.Eng. Academy — Project Handoff

## What this is
A full rebuild of https://www.ppapeng.ca/home into a real React website.
The old site looks generic ("PowerPoint-like"). Goal is a clean, professional, light-themed site.

## Tech stack
- React 19 + Vite 8
- Tailwind CSS v4 (via @tailwindcss/vite)
- lucide-react v1.7.0 for icons
- react-router-dom for routing
- Python 3.13 + Pillow installed (used for image download/conversion)
- Path alias: `@/` maps to `src/`

## Pages built (all complete)

### Homepage — `src/pages/Index.jsx`
Sections: Hero (Hero.jpg + white gradient overlay `from-white/60 via-white/20 to-transparent`), About (two-column with Home2.webp), What We Teach (3 feature items on warm `#f7f4ef` bg with amber dot grid overlay, divider-separated), CTA (white bg) + footer.
UI details: amber rules under section labels, icon circles on feature items, amber top border on CTA section, footer contact items spaced with `gap-8`.
Hero subtitle text uses `text-foreground` (not muted) for readability against the image.
"What We Teach" uses `py-14` (tighter than default).

### Courses directory — `src/pages/Courses.jsx`
Numbered editorial list of all disciplines. Available ones link to their discipline page. Coming soon ones are muted with a badge.
Header uses `book.webp` as CSS background-image (320px fixed height, `background-size: cover`, `background-position: center`, `bg-white/30` overlay). "All Disciplines" label uses brighter amber `#f59e0b` and `font-bold`. Subtitle uses `text-foreground`.

### Discipline page — `src/pages/CourseDiscipline.jsx`
Accordion list of courses. Each course title has a lucide icon. Click to expand: amber left-border, summary, bullet topics ("Main topics covered"), Enroll Now button. Smooth CSS grid animation. Discipline header has optional `headerImage` background at 70% opacity.
Header text: "All Disciplines" back link is `text-foreground` (black), discipline name label uses `#f59e0b` bold amber, subtitle uses `text-foreground`.

### Payments — `src/pages/Payments.jsx`
Arrow-connected 4-step flow (`py-14` tight padding), payment methods (icon + title + desc), contact CTA (centered text + button), footer. Content pending client input.

### FAQs — `src/pages/FAQs.jsx`
4 categories in a 2-column grid on desktop (halves scrolling). "Still have a question?" CTA section is centered, links to /contact page.

### Contact — `src/pages/Contact.jsx`
Split layout: left column has "Reach us directly" label + 3 contact items + response time note. Right has form (name, email, subject dropdown, message). Success state after submit. Web3forms TODO comment ready in handleSubmit.

## Routing — `src/App.jsx`
- `/` → Index
- `/courses` → Courses
- `/courses/:disciplineId` → CourseDiscipline
- `/payments` → Payments
- `/faqs` → FAQs
- `/contact` → Contact

## Course data — `src/data/courses.js`
Single source of truth. Disciplines: Civil (4 courses), Electrical (4), Mechanical (4), Mechatronics (4), Complementary Studies (2) — all `status: 'available'`.

Each discipline has: `id`, `name`, `description`, `status`, `courses`, and `headerImage`.
All 5 disciplines now have `headerImage` set.

Course data sourced from pengacademy.com. Each course has `id`, `title`, `icon` (lucide component), `summary`, and `topics` array.

## Navbar — `src/components/Navbar.jsx`
Fixed top, white/90 backdrop blur. Uses react-router Link.
Courses link has a hover-triggered dropdown (desktop) showing "All Disciplines" + all 5 discipline links. Mobile uses a tap-to-expand inline list with amber left border. Clicking outside closes the desktop dropdown.

## Theme — `src/index.css`
Light theme:
- background: #ffffff
- foreground: #111827
- primary: #d97706 (amber)
- secondary: #f9fafb
- card: #ffffff
- border: #e5e7eb
- muted-foreground: #6b7280
- text-gradient: amber (#b45309 to #d97706)
- soft-line: 1px #e5e7eb divider
- Note: "What We Teach" section uses `#f7f4ef` (warmer off-white) via inline style
- Brighter amber `#f59e0b` used for labels on image backgrounds (Courses header, discipline headers)

## Assets — `src/assets/`
- `Hero.jpg` — homepage hero
- `Home2.webp` — homepage about section
- `Book.webp` — Courses page header background (user-sourced, books image)
- `civil-hero.webp` — Civil discipline header (Pexels 773843, panoramic bridge, 1920×535)
- `electrical-hero.webp` — Electrical discipline header (Pexels 12005160, transmission towers landscape, 1920×1280)
- `mechanical-hero.webp` — Mechanical discipline header (Pexels 9468989, bird's-eye factory, 1920×1283)
- `mechatronics-hero.webp` — Mechatronics discipline header (Pexels 1105379, green circuit board, 1920×1279)
- `complementary-hero.webp` — Complementary Studies discipline header (Pexels 3913021, engineers in meeting, 1920×1280)

All unused assets have been deleted (courses-header.webp, economics/hydraulics/transportation/highway-course.webp, contact.webp, hero.png, react.svg, vite.svg).

## Key rules
- NO em dashes anywhere (looks like AI slop)
- Light theme throughout
- No card grids with white backgrounds — prefer editorial/list layouts
- Accordion stays text-only (no course images inside)
- Image labels on hero backgrounds use `#f59e0b` bold amber and `text-foreground` for body text

## What still needs to be done
- Wire up contact form (web3forms — waiting on email details)
- Payments page: waiting on client details before finalizing content
- Homepage "Who We Are" image: user will source a warmer replacement from Unsplash (engineers/professionals in academic or office context)

## Image plan (future)
Python/Pillow workflow for downloading: `urllib.request` with `User-Agent` header, save via `Pillow` as WebP at quality=85. Python binary at `C:/Users/Omar/AppData/Local/Programs/Python/Python313/python.exe`.
To add a header to a discipline: download → save to `src/assets/`, import in `courses.js`, add `headerImage` to the discipline entry.
