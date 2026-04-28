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

## Deployment
- Hosted on Netlify, connected to GitHub repo (OmarSaad90/PPAPENG)
- Auto-deploys on push to `main`
- Custom domain: `ppapeng.ca` (primary), `www.ppapeng.ca` (redirects to primary)
- SSL active via Let's Encrypt (auto-renews)
- DNS managed in Porkbun

## Pages built (all complete)

### Homepage — `src/pages/Index.jsx`
Sections (in order):
1. Hero (Hero.jpg + white gradient overlay, text anchored left) -- subtitle ends with inline Canada flag (flagcdn.com/w40/ca.png, height 1em, verticalAlign -0.05em). Trust bar sits directly below the CTA button.
2. About (two-column with Home2.webp)
3. What We Teach (3 feature items on `#f7f4ef` warm bg with amber dot pattern, divider-separated)
4. Founder (2-column: bio + credentials left | rectangular photo right)
5. CTA (`#f7f4ef` warm bg with amber dot pattern, two buttons only)
6. Footer (white bg, contact details)

UI details: amber rules under section labels, icon circles on feature items, BadgeCheck icons on instructor credentials.

Trust bar (in Hero, below buttons):
- Two inline items: "100% pass rate" and "Full refund if you don't pass"
- Uses CheckCircle and ShieldCheck icons from lucide-react
- Moved from CTA section to Hero so visitors see it immediately

Founder section layout notes:
- Section label is "Founder" (not "Your instructor")
- 2-column grid: left col (md:col-span-3) has label, name, "P.Eng. Instructor" title, bio paragraph, all credentials as vertical list
- Right col (md:col-span-2) has rectangular photo with rounded corners and amber ring, aspect-ratio 3/4
- Bio does NOT mention Stevens Institute of Technology
- No faculty subtitle line under the title

### Courses directory — `src/pages/Courses.jsx`
Numbered editorial list of all disciplines. All disciplines are available and link to their discipline page. Header has `courses-header.webp` as background at 70% opacity.

### Discipline page — `src/pages/CourseDiscipline.jsx`
Accordion list of courses. Each course title has a lucide icon. Click to expand: amber left-border, summary, bullet topics ("Main topics covered"), Enroll Now button (links to /enroll). Smooth CSS grid animation. Discipline header has optional `headerImage` background at 70% opacity (civil has one).

### Enroll — `src/pages/Payments.jsx` (route: `/enroll`)
No payment integration -- email-based enrollment only. Sections: header → guarantees → how it works → CTA.
- Guarantees section: two items (CheckCircle + ShieldCheck icons), no cards, blends into white background. "100% pass rate" and "Full refund guarantee" each with expanded copy.
- "How It Works" 3-step flow uses `#f7f4ef` bg with amber dot pattern.

### Testimonials — `src/pages/Testimonials.jsx` (route: `/testimonials`)
8 testimonials filled in. 3-column card grid (2 on tablet, 1 on mobile). Layout is final.

Card details:
- Background: `#f7f4ef` (warm, matches site accent sections)
- Amber serif quotation mark at top of each card
- Quote text in foreground color
- Name in semibold, discipline label in amber (primary)
- Hover: subtle lift (`hover:shadow-md hover:-translate-y-0.5`)
- Bottom border separator between quote and attribution

Testimonials and their disciplines:
1. Ghanasyam Sathya -- Transportation Engineering
2. Osama Alhallaq -- Engineering Economics
3. Yihia Saqallah -- Engineering Economics
4. Walid Merad -- Engineering Economics
5. Tinu Thomas, P.Eng. -- Engineering Economics
6. Harshraj Chauhan -- Hydraulics Engineering
7. Nilush Abeygoonaratne -- Transportation Planning and Engineering
8. Hassan Alame -- Civil Engineering (4 courses)

### FAQs — `src/pages/FAQs.jsx`
4 categories in a 2-column grid on desktop. Current question counts: General (4) + Learning Experience (4) in row 1, Courses (2) + Enrollment and Payment (3) in row 2. "Still have a question?" CTA uses `#f7f4ef` with amber dot pattern, links to /contact page.

Category contents:
- General: What is PPA P.Eng. Academy, Who can benefit, Are courses province-specific, Do you offer in-person classes
- Learning Experience: What is your student success rate, Is there a time limit, Is instructor support available, What happens if I do not pass
- Courses: Are courses aligned with P.Eng. exams, Can I take multiple courses at the same time
- Enrollment and Payment: How do I enroll, Do you offer a refund, Is there a guarantee

Note: "What is PPA P.Eng. Academy" answer states it is a subsidiary of PPA Consulting, a Canadian boutique firm specializing in construction consulting and advisory services.

### Contact — `src/pages/Contact.jsx`
Split layout: left column has "Reach us directly" label + 3 contact items (each with small amber icon next to label, large semibold value, generous spacing) + response time note. Right has form (name, email, subject dropdown, message). Success state after submit.

Contact form is wired up to web3forms. Submissions go directly to `charbel.abousamrah@gmail.com`.
- web3forms access key: `6bf93b20-49a0-431d-aeb6-9e399f17daf6`
- Account created under `charbel.abousamrah@gmail.com`
- Form has loading state ("Sending...") and disables button on submit to prevent double sends

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
Single source of truth. Disciplines: Civil (3 courses), Electrical (4), Mechanical (4), Mechatronics (4), Complementary Studies (1) -- all `status: 'available'`.

Course data sourced from pengacademy.com. Each discipline has a `description` tagline. Each course has `id`, `title`, `icon` (lucide component), `summary`, and `topics` array.

Civil courses (with codes):
1. Hydraulics Engineering (CIV A5)
2. Transportation Planning and Engineering (CIV B7)
3. Highway Design, Construction, and Maintenance (CIV A6)

Complementary Studies courses:
1. Engineering Economics (CS 1) -- only course in this discipline

Note: Engineering Economics was removed from Civil (it lives in Complementary Studies). Engineering Management (CS 4) was removed from Complementary Studies entirely.

All discipline headers have images. Civil additionally has `headerImage: civilHeroImg`. To add headers for other disciplines: import the WebP and add `headerImage` to the discipline entry.

All course icons are imported at the top of courses.js from lucide-react.

## Instructor — Charbel Abou Samra
Displayed on homepage in "Founder" section. Photo: `src/assets/charbel.png`.
Credentials shown:
- Professional Engineer (P.Eng.), PEO
- Project Management Professional (PMP), PMI
- Planning and Scheduling Professional (PSP), AACEI
- Risk Management Professional (RMP), PMI
- M.Eng. Civil Engineering
- MBA, Rotman School of Management, University of Toronto
- Faculty, Stevens Institute of Technology

Note: Stevens Institute is listed as a credential but is NOT mentioned in the bio paragraph and there is no faculty subtitle on the homepage.

## Email
All site display emails use: `charbel.abousamra@ppapeng.ca`
Contact form submissions go directly to: `charbel.abousamrah@gmail.com` (via web3forms)
Manual emails to `charbel.abousamra@ppapeng.ca` forward to `charbel.abousamrah@gmail.com` via ImprovMX.

ImprovMX alias to add (if not already done): `charbel.abousamra@ppapeng.ca` → `charbel.abousamrah@gmail.com`

## DNS — Porkbun (ppapeng.ca)
All records confirmed active:

| Type | Host | Value | Priority |
|------|------|-------|----------|
| A | @ | 75.2.60.5 | -- |
| CNAME | www | ppapeng.netlify.app | -- |
| MX | @ | mx1.improvmx.com | 10 |
| MX | @ | mx2.improvmx.com | 20 |
| TXT | @ | v=spf1 include:spf.improvmx.com ~all | -- |
| TXT | @ | google-site-verification=ruuHQLHvAgPHzioByn4QMWmwpCWB-vywpwwcLELfaOY | -- |

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
- Note: "What We Teach", CTA (homepage), "How It Works" (enroll page), and FAQs CTA section use `#f7f4ef` with amber dot pattern via inline style

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
- `src/assets/logo1.webp` — site logo (also copied to `public/logo1.webp` for favicon use)

## Key rules
- NO em dashes anywhere (looks like AI slop)
- Light theme throughout
- No card grids with white backgrounds -- prefer editorial/list layouts
- Accordion stays text-only (no course images inside)

## Favicon
Set in `index.html` line 5: `<link rel="icon" type="image/webp" href="/logo1.webp" />`. File lives in `public/logo1.webp`. Covers all pages globally.

## What still needs to be done
- Check GSC Coverage and Performance reports in 2-3 weeks for indexing status and keyword impressions
- Get backlinks: Charbel LinkedIn post linking to ppapeng.ca, PPA Consulting website link, engineering directories
- Upgrade admin auth to Supabase Auth (email+password) if tighter security is needed in the future
- Verify `ppapeng.ca` domain in Resend so chat email notifications can be sent from `chat@ppapeng.ca` instead of the `onboarding@resend.dev` sandbox sender (currently lands in spam on first delivery). Steps: Resend dashboard → Domains → Add `ppapeng.ca` → copy DNS records → paste into Porkbun → wait ~5 min → update `FROM_ADDRESS` secret in Supabase.

## Completed
- OG social share image done (2026-04-24): `public/og-image.png` (1200x630), applied to all 7 pages (og:image + twitter:image)
- SEO pass done (2026-04-24): meta tags, structured data (FAQPage, AggregateRating, BreadcrumbList, Course, Person, WebSite), sitemap, robots.txt, canonical tags, OG/Twitter tags on all pages
- ImprovMX alias confirmed for `charbel.abousamra@ppapeng.ca`
- Google Search Console verified (2026-04-24): sitemap submitted, all pages requested for indexing
- Google Analytics 4 set up (2026-04-24): Measurement ID G-SKVCR5TTEC, tag in index.html
- GA4 access: Charbel (charbel.abousamrah@gmail.com) has Editor access at account level, sees all properties
- Real-time chat widget built and fully debugged (2026-04-24):
  - Supabase backend; `messages` and `conversations` tables added to `supabase_realtime` publication (required for realtime to work)
  - Users: name + optional email, then live chat. Conversation ID generated client-side (crypto.randomUUID) to avoid RLS SELECT issues
  - Admin: visit /admin once to log in; full page reload on login/logout so widget initializes correctly
  - Admin inbox: unread counts tracked in ChatWidget (always mounted) so badges persist whether inbox is open or closed; amber highlight + message count badge per conversation; re-fetches conversation list and open conversation messages whenever new message detected
  - Admin notifications: pulsing ring on bubble, tab title unread count, OS browser notification (requires Allow permission on first load)
  - Admin can delete conversations (trash icon on hover, confirms before deleting)
  - Tooltip "Have a question? Chat with us" appears after 3s for users
  - Supabase project: oisvocgopuswtdfhkksm.supabase.co
  - Admin password stored in VITE_ADMIN_PASSWORD (Netlify env var + local .env)
  - .env is gitignored -- never pushed to GitHub
- Email notifications for chat messages built (2026-04-28):
  - Charbel gets an email at `charbel.abousamrah@gmail.com` whenever a user sends a chat message
  - Architecture: Supabase Database Webhook on `messages` INSERT → Edge Function `notify-new-message` → Resend API
  - Edge function: `supabase/functions/notify-new-message/index.ts`
    - Filters out admin replies (only `sender = 'user'` triggers email)
    - Debounces to one email per conversation per 10 minutes (uses new `last_notified_at` column on `conversations`)
    - Validates a shared `WEBHOOK_SECRET` header so only the Supabase webhook can invoke it
    - HTML-escapes user content; sets `reply_to` to the visitor's email if provided
  - Schema change: `alter table conversations add column last_notified_at timestamptz`
  - Resend account: free tier (3000 emails/month, 100/day), owned under Omar's email; sandbox sender `onboarding@resend.dev`
  - First email Charbel receives may land in Spam — mark "Not spam" once, future emails go to inbox
  - Edge Function secrets in Supabase (Project Settings → Edge Functions → Secrets):
    - `RESEND_API_KEY` — Resend API key (Sending access)
    - `ADMIN_EMAIL` — recipient address (currently charbel.abousamrah@gmail.com)
    - `WEBHOOK_SECRET` — shared secret matching the webhook header
    - `SITE_URL` — https://ppapeng.ca (used in "Reply in admin panel" link)
    - `FROM_ADDRESS` — optional, defaults to `PPA Chat <onboarding@resend.dev>`. Override once domain is verified.
  - Database webhook config: Database → Webhooks → `notify-on-user-message`, table `messages`, INSERT only, calls `notify-new-message` edge function with header `x-webhook-secret: <WEBHOOK_SECRET>`
  - Deploy command: `npx supabase functions deploy notify-new-message --no-verify-jwt` (the `--no-verify-jwt` flag is required because the database webhook is unauthenticated; we authenticate via the shared secret instead)

## Image plan (remaining disciplines)
All discipline headers already have images in assets. If any are missing or need replacing, source from Pexels or Unsplash (free, no attribution). Claude can download and convert automatically via Python/Pillow. Add `headerImage` to the discipline entry in `courses.js`.
