---
title: "Rebuilding my portfolio in 2026"
slug: "rebuilding-my-portfolio"
date: "2026-10-07"
description: "Why I retired my 2019 Gatsby site, rebuilt it in React + Vite, and locked down the npm supply chain while I was at it."
published: true
---

My old portfolio was a Gatsby 2 site from 2019. It still worked, mostly, until the
HTTPS certificate quietly stopped renewing and visitors started getting a
"Your connection is not private" warning. That was the push I needed to rebuild it.

## Upgrade or start over?

The old site pulled in roughly **1,800 npm packages** to render a single page of
cards. Gatsby itself is in maintenance mode, `node-sass` no longer builds on a
current Node, and Google shut down the analytics version it used back in 2023.
Upgrading would have meant replacing almost every plugin anyway, so I started fresh.

The new site is plain **React + Vite**. At build time every page is rendered to
static HTML, so it loads instantly and search engines see real content. React
then takes over in the browser for the interactive bits: the flip cards and the
time-of-day greeting.

It now installs **22 packages** instead of 1,800.

## Locking down the supply chain

npm has had a rough few years: hijacked maintainer accounts, self-spreading
worms, and popular packages briefly shipping malware. A few guardrails go a long way:

- **A 7-day release cooldown.** pnpm only installs versions that have been public
  for at least a week. Most malicious releases are caught and pulled within hours.
- **No install scripts by default.** Dependencies can't run code during install
  unless I approve them by name.
- **Provenance checks.** pnpm refuses a release that drops the publishing
  provenance earlier versions had, which is a common sign of a stolen token.
- **Exact versions and a committed lockfile**, plus `pnpm audit` before every deploy.

## Hardening the site itself

The site ships with a strict Content Security Policy (no inline scripts, no
third-party code), `X-Frame-Options`, HSTS, a tight `Permissions-Policy`, and no
tracking scripts at all. There's also a small "kill switch" service worker that
cleans up the offline cache the old Gatsby site left in returning visitors' browsers.

## What I kept

The fun parts. The 3D flip cards and hover effects made the jump, now with
smoother animations, keyboard and touch support, a dark mode, and respect for
"reduce motion" settings.
