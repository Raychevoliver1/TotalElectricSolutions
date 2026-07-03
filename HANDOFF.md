# Handoff notes

What this project is, how to deploy it, and how to hand content editing to
non-technical staff.

## What changed

The old totalelectricsolutions.co.uk was WordPress + Elementor + JetElements
(6 pages: Home, About, Services, Projects, Training & Apprenticeships,
Contact). This is a full rebuild as a static Next.js site with the same
content, redesigned using the site's actual brand colors (navy `#284C6F`,
blue `#0071BB`, lime `#BED130` — pulled from the old site's own Elementor
theme, not invented), with no CMS database, no plugins, and no WordPress
security surface to maintain. All real copy, office addresses, phone/email,
project names, team names/roles and NICEIC accreditation were carried over
from the live site as of July 2026.

The site has also been checked against automated accessibility testing
(axe-core, WCAG 2 A/AA) with zero violations across all 6 pages, desktop and
mobile — see "Accessibility" below for what that covers.

## 1. Deploy to a private staging URL first

You don't need to touch DNS or "go live" to start using this. Deploying to
Netlify (step 2 below) gives you a working `*.netlify.app` URL immediately —
that's a fully real, fully functional copy of the site that only people with
the link can find (it won't show up in Google, nothing links to it). Use
that URL to:

- Review the design yourselves.
- Log into `/admin` and edit every page's text, the project gallery, the
  team list, office details, etc. — as much as you like.
- Send the link to anyone else who needs to sign off.

Only when you're both happy do you point the real domain
(`totalelectricsolutions.co.uk`) at it (step 2, sub-step 5) — that's the
"publish" moment. Nothing before that is visible to the public.

## 2. Deploying

The site is a static export (`npm run build` → `/out`). Recommended host:
**Netlify**, because it makes the CMS (step 3) close to zero-config.

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. In Netlify: **Add new site → Import an existing project**, pick this repo.
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Deploy. You'll get a `*.netlify.app` URL — this is your private staging
   site (see step 1).
5. When ready to go live: add the custom domain
   (`totalelectricsolutions.co.uk` and `www.`) under **Site configuration →
   Domain management**, then update the domain's DNS records (at your
   current registrar/DNS host) to point at Netlify, per Netlify's on-screen
   instructions.

Vercel or any static host works too, but the CMS setup in step 3 assumes Netlify.

## 3. Content editing (Decap CMS)

Once deployed on Netlify, editors can manage content at `yoursite.com/admin`
without touching code — no Git, no code editor, just forms.

1. Netlify dashboard → **Site configuration → Identity → Enable Identity**.
2. **Identity → Services → Enable Git Gateway**.
3. **Identity → Invite users** — invite both of you (and anyone else who
   should be able to edit) by email, individually. Each person gets their
   own login.
4. Each person gets an email invite, sets a password, then logs in at
   `/admin`.

What you can edit there: all homepage copy and stats, the "Why Choose Us"
reasons, the About page, the Training page, the team list (leadership +
site managers), the full services list, and the full projects gallery
(including uploading new photos and adding/removing/reordering projects).
Every field in the CMS has a short hint explaining what it does and where
it shows up on the site.

Saving in the CMS commits directly to the `main` branch, which triggers a
new deploy automatically — changes go live (on whichever URL is currently
pointed at the site — staging or real domain) in about 1-2 minutes.

**What isn't in the CMS** — these need a developer (or a Claude Code
session) because they involve code, not content: page layout, the color
scheme/fonts, navigation menu structure, and the logo/certification badge
images in the header and footer.

If you don't want to use Netlify Identity, the same `/admin` panel works
with GitHub-based login instead, but that requires setting up an OAuth
proxy — ask your developer if you want to switch to that.

## 4. Contact form

The contact form (`/contact`) currently has no backend wired up — submitting
it will show an error message pointing people to email `info@` directly. To
make it actually send messages:

1. Create a free [Formspree](https://formspree.io) form (or Netlify Forms,
   or any endpoint that accepts a `POST` with `FormData`).
2. In Netlify: **Site configuration → Environment variables**, add
   `NEXT_PUBLIC_FORM_ENDPOINT` = your form's endpoint URL.
3. Redeploy.

## 5. Accessibility

The site was tested with an automated WCAG 2 A/AA scan (axe-core) on every
page, in both desktop and mobile layouts, including the mobile menu open —
zero violations. Beyond the automated check, it also includes things a
scanner can't fully verify on its own:

- A "Skip to main content" link for keyboard users (press Tab on any page).
- Visible focus outlines on every interactive element (buttons, links, form
  fields) — never invisible when tabbing through with a keyboard.
- The mobile menu closes on `Escape`, locks background scroll while open,
  and every control has a proper label.
- Form fields have real `<label>`s, `autocomplete` hints, and status
  messages (sent/error) are announced to screen readers automatically.
- All text/background color combinations meet WCAG AA contrast (4.5:1 for
  body text).
- Motion (hover zoom effects) is disabled automatically for visitors with
  "reduce motion" set in their OS.

If you add a lot of new content through the CMS later (new sections, new
colors, etc.), it's worth re-running the same check — ask your developer or
a Claude Code session to do an accessibility pass again.

## 6. What's not carried over from the old site

- Individual staff headshots — the old site used a mix of real photos and
  placeholder silhouettes inconsistently, so the new team section uses
  clean initials avatars instead. Swap in real photos via the CMS if wanted
  (would need a small code change to support photos instead of initials —
  ask your developer).
- Any blog/news content — the old site didn't appear to have one live.

## 7. Local development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static export to /out
```
