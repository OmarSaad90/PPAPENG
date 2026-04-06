# PPA P.Eng. Academy — Project Handoff

## What this is
A full rebuild of https://www.ppapeng.ca/home into a real React website.
The old site looks generic ("PowerPoint-like"). Goal is a clean, professional, light-themed site.

## Tech stack
- React 19 + Vite 8
- Tailwind CSS v4 (via @tailwindcss/vite)
- lucide-react v1.7.0 for icons
- react-router-dom for routing
- react-helmet-async for per-page SEO meta tags
- Python 3.13 + Pillow installed (used for image download/conversion)
- Path alias: `@/` maps to `src/`

## Hosting
- Deployed on Netlify, connected to GitHub (repo: OmarSaad90/PPAPENG)
- Auto-deploys on every push to `main`
- `netlify.toml` at project root: build command `npm run build`, publish `dist`, Node 20, SPA redirect rule
- Live domain: https://www.ppapeng.ca

## Pages built (all complete)

### Homepage — `src/pages/Index.jsx`
Sections: Hero (Hero.jpg + white gradient overlay `from-white/60 via-white/20 to-transparent` left-to-right), About (two-column with Home2.webp), What We Teach (3 feature items on warm `#f7f4ef` bg with amber dot grid overlay, divider-separated), CTA (white bg, standard gray border-t) + footer.
UI details: amber rules under section labels, icon circles on feature items, footer contact items spaced with `gap-8`.
Hero subtitle uses `text-foreground` for readability against the image. Hero has no small caps label above the heading (was removed). Heading uses `font-extrabold`. Only one CTA button in hero ("Explore Courses") -- "Talk to Us" was removed.
"What We Teach" uses `py-14`. Feature items use `Multi-field coverage`, `Expert-led instruction`, `Flexible, self-paced learning`.

### Courses directory — `src/pages/Courses.jsx`
Numbered editorial list of all disciplines. Available ones link to their discipline page. Coming soon ones are muted with a badge.
Header uses `Book.webp` as CSS background-image (320px fixed height, `background-size: cover`, `background-position: center`, `bg-white/30` overlay). "All Courses" label uses brighter amber `#f59e0b` bold. Subtitle uses `text-foreground`.

### Discipline page — `src/pages/CourseDiscipline.jsx`
Accordion list of courses. Each course title has a lucide icon. Click to expand: amber left-border, summary, bullet topics, Enroll Now button. Smooth CSS grid animation.
Header text: "All Courses" back link is `text-foreground`, discipline name label uses `#f59e0b` bold amber, subtitle uses `text-foreground`.
Header image has a `from-white/55 via-white/20 to-transparent` left-to-right gradient overlay to keep the amber label readable against bright images.
Dynamic SEO title/description per discipline via react-helmet-async.

### Payments — `src/pages/Payments.jsx`
Simple 3-step enrollment flow: Browse courses → Reach out (email/contact form) → We take it from there.
Guarantee banner: 100% pass rate + full refund if they fail.
No payment integration -- all enrollment is handled manually over email.

### FAQs — `src/pages/FAQs.jsx`
4 categories in a 2-column grid on desktop. "Still have a question?" CTA links to /contact.

### Contact — `src/pages/Contact.jsx`
Split layout: left has contact items + response time note. Right has form (name, email, subject dropdown, message). Success state after submit.
Web3forms integration is TODO — waiting on client email details.

## Routing — `src/App.jsx`
- `/` → Index
- `/courses` → Courses
- `/courses/:disciplineId` → CourseDiscipline
- `/payments` → Payments
- `/faqs` → FAQs
- `/contact` → Contact

## Course data — `src/data/courses.js`
Single source of truth. Disciplines: Civil (4 courses), Electrical (4), Mechanical (4), Mechatronics (4), Complementary Studies (2) — all `status: 'available'`.
Each discipline has: `id`, `name`, `description`, `status`, `headerImage`, `courses`.
All 5 disciplines have `headerImage` set.
"disciplines" terminology replaced with "courses" / "fields" throughout all UI text.

## Navbar — `src/components/Navbar.jsx`
Fixed top, white/90 backdrop blur. Courses link has a hover-triggered dropdown (desktop, 150ms close delay) showing "All Courses" + all 5 discipline links. Clicking "Courses" also navigates to /courses. Mobile uses tap-to-expand with amber left border.
Hide-on-scroll behavior: slides up (`-translate-y-full`) when scrolling down, slides back in when scrolling up or when at top of page. Transition 300ms.

## Theme — `src/index.css`
Light theme:
- background: #ffffff
- foreground: #111827
- primary: #d97706 (amber)
- secondary: #f9fafb
- card: #ffffff
- border: #e5e7eb
- muted-foreground: #6b7280
- "What We Teach" section uses `#f7f4ef` (warmer off-white) via inline style
- Brighter amber `#f59e0b` used for labels on image backgrounds

## Assets — `src/assets/`
- `Hero.jpg` — homepage hero
- `Home2.webp` — homepage "Who We Are" section (Pexels 7988208, man teaching team with laptop)
- `Book.webp` — Courses page header (user-sourced books image). Note capital B — import must match exactly.
- `logo.png` — also copied to `public/logo.png` for use as favicon
- `civil-hero.webp` — Civil header (Pexels 773843, panoramic bridge, 1920×535)
- `electrical-hero.webp` — Electrical header (Pexels 12005160, transmission towers, 1920×1280)
- `mechanical-hero.webp` — Mechanical header (Pexels 9468989, bird's-eye factory, 1920×1283)
- `mechatronics-hero.webp` — Mechatronics header (Pexels 1105379, green circuit board, 1920×1279)
- `complementary-hero.webp` — Complementary Studies header (Pexels 3913021, engineers in meeting, 1920×1280)

Python download workflow: `C:/Users/Omar/AppData/Local/Programs/Python/Python313/python.exe`, urllib.request + Pillow, save as WebP quality=85. Always use `?auto=compress&cs=tinysrgb&w=1920` on Pexels URLs.

## SEO
- `index.html` has full meta tags: title, description, keywords (all provinces + all disciplines), Open Graph, Twitter Card, JSON-LD structured data (EducationalOrganization schema with all courses and all Canadian provinces/territories)
- `public/sitemap.xml` — all 10 pages listed with priorities
- `public/robots.txt` — allows all, points to sitemap
- `react-helmet-async` used for per-page unique title, description, canonical URL, OG tags
- After deploying: submit sitemap to Google Search Console at https://www.ppapeng.ca/sitemap.xml

## Key rules
- NO em dashes anywhere (looks like AI slop)
- Light theme throughout
- No card grids with white backgrounds — prefer editorial/list layouts
- Accordion stays text-only (no course images inside)
- Image labels on hero backgrounds use `#f59e0b` bold amber, body text uses `text-foreground`
- Asset filenames are case-sensitive on Linux/Netlify — imports must match exact case

## Domain + Email setup (not done yet)

### Connecting ppapeng.ca to Netlify
Domain is registered on GoDaddy. Two options:

**Option A -- Switch nameservers to Netlify (recommended):**
1. Netlify: Site → Domain management → Add custom domain → `ppapeng.ca`
2. Netlify shows 4 nameservers
3. GoDaddy: My Products → domain → DNS → Nameservers → Custom → paste Netlify's nameservers
4. Wait a few hours, Netlify auto-provisions SSL

**Option B -- Keep GoDaddy DNS, just add records:**
- `A` record: `@` → `75.2.60.5`
- `CNAME`: `www` → `[site-name].netlify.app`
- Then add the custom domain in Netlify dashboard

### Activating info@ppapeng.ca
Currently a placeholder. Domain is on GoDaddy but GoDaddy doesn't handle email by default -- need a separate email host.

**Chosen approach (pending): Zoho Mail free + Gmail forwarding**
- Sign up at zoho.com/mail (free plan), add `ppapeng.ca` as domain
- Zoho provides MX records -- paste them into GoDaddy DNS
- In Zoho: set up forwarding to client's personal Gmail
- In Gmail: Settings → Accounts → "Send mail as" → add `info@ppapeng.ca` → use Zoho SMTP
- Result: everything works inside Gmail for free, never need to open Zoho

**Alternative if client wants native Gmail:** Google Workspace (~$7/month) -- same DNS/MX process but Google handles everything.

GoDaddy DNS will have both: records pointing web traffic to Netlify + MX records pointing email to Zoho. They coexist fine.

## What still needs to be done
- **Payments page:** DONE -- email-based enrollment, no payment integration.
- **Contact form:** wire up web3forms (waiting on client email)
- **Google Search Console:** submit sitemap after deploy
- **Facebook page:** to be set up after payments decision. Plan is client creates page under his own account, dev gets added as admin. Configure Meta Ads Manager with monthly budget cap and auto-boost rule so posts boost automatically. Client pays ad spend directly.

## What's done (recently completed)
- Course discipline header images added and wired up for all 5 disciplines
- Homepage cleaned up and finalized

## Planned next phase — cart + checkout (CANCELLED -- client chose email-based enrollment)
Architecture is confirmed: no database, stays on Netlify, email-based course delivery.

**Stack:**
- `@paypal/react-paypal-js` — PayPal React SDK (client needs Canadian PayPal business account, will provide Client ID + Secret)
- Netlify Functions — 2 serverless functions: `create-order.js` (calls PayPal API) and `confirm-order.js` (verifies payment, triggers email)
- Resend — transactional email for order confirmation + course access (free tier, simple API)

**Flow:**
1. "Enroll Now" on course accordion → adds course to cart (React Context + localStorage)
2. Cart icon in navbar shows item count
3. `/checkout` page — cart summary, PayPal button, payment
4. Netlify Function creates PayPal order server-side
5. On payment success — Resend sends confirmation email with course access
6. Confirmation page shown

**Scope estimate:** ~3 sessions once PayPal credentials are available.
**No database needed** — PayPal holds transaction records, Resend holds email logs.
