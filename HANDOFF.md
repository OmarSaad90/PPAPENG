hi claude, read handoff.md first# PPA P.Eng. Academy — Project Handoff

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
Sections (in order):
1. Hero (Hero.jpg + white gradient overlay, text anchored left)
2. About (two-column with Home2.webp)
3. What We Teach (3 feature items on `#f7f4ef` warm bg with amber dot pattern, divider-separated)
4. Instructor (centered spotlight: circular photo, name, university, 2-col credentials grid)
5. CTA (`#f7f4ef` warm bg with amber dot pattern, two buttons)
6. Footer (white bg, contact details)

UI details: amber rules under section labels, icon circles on feature items, BadgeCheck icons on instructor credentials.

### Courses directory — `src/pages/Courses.jsx`
Numbered editorial list of all disciplines. Available ones link to their discipline page. Coming soon ones are muted with a badge. Header has `courses-header.webp` as background at 70% opacity.

### Discipline page — `src/pages/CourseDiscipline.jsx`
Accordion list of courses. Each course title has a lucide icon. Click to expand: amber left-border, summary, bullet topics ("Main topics covered"), Enroll Now button (links to /enroll). Smooth CSS grid animation. Discipline header has optional `headerImage` background at 70% opacity (civil has one).

### Enroll — `src/pages/Payments.jsx` (route: `/enroll`)
No payment integration -- email-based enrollment only. 3-step flow: browse courses → email us → we handle the rest. Includes 100% pass rate + full refund guarantee callouts. "How It Works" section uses `#f7f4ef` bg with amber dot pattern.

### Testimonials — `src/pages/Testimonials.jsx` (route: `/testimonials`)
Skeleton page ready. Header built. Testimonials array is empty -- waiting on client to provide content. Grid layout will auto-render once quotes are added to the `testimonials` array at the top of the file.

### FAQs — `src/pages/FAQs.jsx`
4 categories in a 2-column grid on desktop (halves scrolling). "Still have a question?" CTA section is centered, links to /contact page.

### Contact — `src/pages/Contact.jsx`
Split layout: left column has "Reach us directly" label + 3 contact items (each with small amber icon next to label, large semibold value, generous spacing) + response time note. Right has form (name, email, subject dropdown, message). Success state after submit. Web3forms TODO comment ready in handleSubmit.

## Routing — `src/App.jsx`
- `/` → Index
- `/courses` → Courses
- `/courses/:disciplineId` → CourseDiscipline
- `/enroll` → Payments (renamed from /payments)
- `/testimonials` → Testimonials
- `/faqs` → FAQs
- `/contact` → Contact

## Navbar — `src/components/Navbar.jsx`
Fixed top, white/90 backdrop blur. Links (desktop + mobile): Home, Courses (with dropdown), Testimonials, Enroll, FAQs, Contact Us. "Enroll Now" CTA button top right links to /courses.

## Course data — `src/data/courses.js`
Single source of truth. Disciplines: Civil (4 courses), Electrical (4), Mechanical (4), Mechatronics (4), Complementary Studies (2) — all `status: 'available'`.

Course data sourced from pengacademy.com. Each discipline has a `description` tagline. Each course has `id`, `title`, `icon` (lucide component), `summary`, and `topics` array.

Civil additionally has `headerImage: civilHeroImg`. To add headers for other disciplines: import the WebP and add `headerImage` to the discipline entry.

All course icons are imported at the top of courses.js from lucide-react.

## Instructor — Charbel Abou Samra
Displayed on homepage in "Your instructor" section. Photo: `src/assets/charbel.png`.
Credentials shown:
- Professional Engineer (P.Eng.), PEO
- Project Management Professional (PMP), PMI
- Planning and Scheduling Professional (PSP), AACEI
- Risk Management Professional (RMP), PMI
- M.Eng. Civil Engineering
- MBA, Rotman School of Management, University of Toronto
- Faculty, Stevens Institute of Technology

## Email
All site emails use: `charbelabousamrah@ppapeng.ca`
Forwards to: `charbel.abousamrah@gmail.com` via ImprovMX.
ImprovMX alias is configured. Porkbun DNS (MX + SPF records) still needs to be updated -- see steps.txt section 2 for exact records.

## Theme — `src/index.css`
Light theme:
- background: #ffffff
- foreground: #111827
- primary: #d97706 (amber)
- secondary: #f9fafb (used on discipline page headers, FAQs CTA section)
- card: #ffffff
- border: #e5e7eb
- muted-foreground: #6b7280
- text-gradient: amber (#b45309 to #d97706)
- soft-line: 1px #e5e7eb divider
- Note: "What We Teach", CTA (homepage), and "How It Works" (enroll page) use `#f7f4ef` with amber dot pattern via inline style

## Assets
- `src/assets/Hero.jpg` — homepage hero
- `src/assets/Home2.webp` — homepage about section
- `src/assets/charbel.png` — instructor photo (homepage)
- `src/assets/courses-header.webp` — Courses page header background
- `src/assets/civil-hero.webp` — Civil discipline header background
- `src/assets/electrical-hero.webp` — Electrical discipline header background
- `src/assets/mechanical-hero.webp` — Mechanical discipline header background
- `src/assets/mechatronics-hero.webp` — Mechatronics discipline header background
- `src/assets/complementary-hero.webp` — Complementary Studies discipline header background
- `src/assets/economics-course.webp` — downloaded, not currently used
- `src/assets/hydraulics-course.webp` — downloaded, not currently used
- `src/assets/transportation-course.webp` — downloaded, not currently used
- `src/assets/highway-course.webp` — downloaded, not currently used
- `src/assets/contact.webp` — downloaded, not currently used

## Key rules
- NO em dashes anywhere (looks like AI slop)
- Light theme throughout
- No card grids with white backgrounds -- prefer editorial/list layouts
- Accordion stays text-only (no course images inside)

## What still needs to be done
- Wire up contact form: web3forms. Waiting on client to provide web3forms access key. Once key is in, drop it into handleSubmit in `src/pages/Contact.jsx` (TODO comment is already there).
- Update Porkbun DNS for email forwarding (MX + SPF) -- steps.txt section 2 has exact records.
- Testimonials content: waiting on client to provide quotes. Add to `testimonials` array in `src/pages/Testimonials.jsx`.

## Image plan (remaining disciplines)
All discipline headers already have images in assets. If any are missing or need replacing, source from Pexels or Unsplash (free, no attribution). Claude can download and convert automatically via Python/Pillow. Add `headerImage` to the discipline entry in `courses.js`.
