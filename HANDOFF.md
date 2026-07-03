# Handoff notes

What this project is, how to deploy it, and how to hand content editing to
non-technical staff.

## What changed

The old totalelectricsolutions.co.uk was WordPress + Elementor + JetElements
(6 pages: Home, About, Services, Projects, Training & Apprenticeships,
Contact). This is a full rebuild as a static Next.js site with the same
content, redesigned visually, with no CMS database, no plugins, and no
WordPress security surface to maintain. All real copy, office addresses,
phone/email, project names, team names/roles and NICEIC accreditation were
carried over from the live site as of July 2026.

## 1. Deploying

The site is a static export (`npm run build` → `/out`). Recommended host:
**Netlify**, because it makes the CMS (step 2) close to zero-config.

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. In Netlify: **Add new site → Import an existing project**, pick this repo.
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Deploy. You'll get a `*.netlify.app` URL to sanity-check before cutting over DNS.
5. Add the custom domain (`totalelectricsolutions.co.uk` and `www.`) under
   **Site configuration → Domain management**, then update the domain's DNS
   records (at your current registrar/DNS host) to point at Netlify, per
   Netlify's on-screen instructions.

Vercel or any static host works too, but the CMS setup in step 2 assumes Netlify.

## 2. Content editing (Decap CMS)

Once deployed on Netlify, editors can manage content at `yoursite.com/admin`
without touching code:

1. Netlify dashboard → **Site configuration → Identity → Enable Identity**.
2. **Identity → Services → Enable Git Gateway**.
3. **Identity → Invite users** — invite each staff member who should be able
   to edit content, by email.
4. They'll get an email invite, set a password, then log in at `/admin`.

Editable collections: Site Settings (contact info, homepage copy, stats),
About page, Training page, Team (leadership + site managers), Services list,
Projects list (including uploading new project photos). Saving in the CMS
commits directly to the `main` branch, which triggers a new Netlify deploy
automatically — changes go live in ~1-2 minutes.

If you don't want to use Netlify Identity, the same `/admin` panel works with
GitHub-based login instead, but that requires setting up an OAuth proxy —
ask your developer if you want to switch to that instead.

## 3. Contact form

The contact form (`/contact`) currently has no backend wired up — submitting
it will show an error message pointing people to email `info@` directly. To
make it actually send messages:

1. Create a free [Formspree](https://formspree.io) form (or Netlify Forms,
   or any endpoint that accepts a `POST` with `FormData`).
2. In Netlify: **Site configuration → Environment variables**, add
   `NEXT_PUBLIC_FORM_ENDPOINT` = your form's endpoint URL.
3. Redeploy.

## 4. What's not carried over from the old site

- Individual staff headshots — the old site used a mix of real photos and
  placeholder silhouettes inconsistently, so the new team section uses
  clean initials avatars instead. Swap in real photos via the CMS if wanted.
- Any blog/news content — the old site didn't appear to have one live.

## 5. Local development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static export to /out
```
