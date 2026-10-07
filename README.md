# Portfolio

https://www.jonathanhelvey.com

Jonathan Helvey's portfolio. **React 19 + Vite**, with every page pre-rendered to
static HTML at build time and React taking over in the browser for the interactive
bits (3D flip cards, time-of-day greeting, hide-on-scroll header).

## Setup

Needs Node 22–24 (`nvm use`) and pnpm 11 (`corepack enable`).

```bash
pnpm install
pnpm dev        # http://localhost:5173 (home page only; other pages need a build)
pnpm build      # → dist/client
pnpm preview    # http://localhost:4173, with the same security headers as Netlify
pnpm test       # contact-form spam filter tests (Node's built-in runner)
```

## Where things live

| What | Where |
| --- | --- |
| Projects (cards) | `src/data/projects.js` + screenshots in `src/assets/projects/` |
| Tech logos / skills | `src/data/tech.js` |
| Bio | `src/pages/Home.jsx` |
| Blog posts | `src/posts/*.md` (front matter: title, slug, date, description, published) |
| Pages & SEO titles | `src/routes.js` |
| Styles | `src/styles/global.css` |
| Contact form spam filter | `netlify/functions/contact.mjs` (tests in `tests/`) |
| Light/dark theme | color tokens at the top of `global.css`, `public/theme.js`, `ThemeToggle.jsx` |
| Headers, redirects, build | `netlify.toml` |

`scripts/prerender.js` renders every route in `src/routes.js` to HTML and writes
`sitemap.xml` and `robots.txt`.

## Contact form

The form posts to `/api/contact`, a Netlify Function that drops spam (honeypot,
no JavaScript, sent within 3 seconds, too many links, SEO/marketing pitches) and
forwards real messages to the **contact-verified** Netlify form, declared in
`public/netlify-forms.html`. Spam still sees the thanks page; the reason is in
the function logs. Submissions show up under **Forms → contact-verified**.

## Security

**Dependencies** (`pnpm-workspace.yaml`):

- `minimumReleaseAge: 10080`: only installs versions that have been public for 7+ days.
  Hijacked releases are almost always pulled within hours. Exceptions are listed
  one version at a time in `minimumReleaseAgeExclude`.
- `trustPolicy: no-downgrade`: rejects a release that lost the publishing provenance
  earlier versions had.
- Install scripts are blocked unless allowlisted in `allowBuilds`.
- Exact versions in `package.json` + committed `pnpm-lock.yaml`.
- Netlify runs `pnpm audit --audit-level=high` and `pnpm test` before every build.

**Site** (`netlify.toml`): strict Content-Security-Policy (own files only, no
inline scripts), HSTS, `X-Frame-Options: DENY`, `nosniff`, Referrer-Policy,
Permissions-Policy and COOP. No analytics or third-party scripts.

`public/sw.js` removes the offline service worker the old Gatsby site installed
in returning visitors' browsers. Keep it for a few months after launch.

## Deployed with Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/a47eb81d-17f0-40f3-bcbb-1c080e8a8b8e/deploy-status)](https://app.netlify.com/sites/flamboyant-kalam-eec45d/deploys)
