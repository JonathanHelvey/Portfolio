---
title: "Building an AI job-fit checker without leaking secrets or burning money"
slug: "building-an-ai-job-fit-checker"
date: "2026-10-10"
description: "How the AI Fit Check on this site stays grounded, treats input and output as hostile, keeps its key on the server, and makes the worst-case abuse cheap and harmless."
published: true
---

My portfolio has an **AI Fit Check**: a recruiter pastes a job description and
gets back a structured read on how my experience matches. That means a fit
level, the requirements I meet (linked to the projects that show them), topics
worth discussing, and a few interview questions. Try it at [/fit/](/fit/).

The feature itself is simple. The interesting part is everything around it: a
public text box wired to an LLM is an invitation to abuse. Here's how I built it
so it stays honest, safe and free.

## 1. Ground it, or it will make things up

LLMs are confident storytellers. Ask one about a candidate and it will happily
invent years of experience, certifications or employers.

So the model gets **one source of truth**: the same data files that render my
project cards and skills grid. A small serverless function turns them into a
plain-text profile and sends it as the system prompt, with rules like:

- Use **only** facts in the profile. Never invent titles, years, degrees or numbers.
- If the job asks for something the profile doesn't show, list it under topics
  to discuss. Never stretch weak evidence into a match.
- Grade the fit on the **required** qualifications. Nice-to-haves can only add to it.

Because the profile is built from the site's own data, updating a project card
automatically updates what the AI knows. There's no second copy to drift out of
date.

## 2. Treat the input as hostile

Anyone can paste anything into that box, including "ignore your instructions
and…". Two defenses:

- The prompt labels the job description as **untrusted data to evaluate**, sent
  separately from the instructions.
- More importantly, **the model has nothing worth stealing.** It has no tools, no
  database access and no secrets in the prompt. The worst a successful prompt
  injection can do is produce a weird answer, and the next step handles that.

## 3. Treat the output as hostile too

The model is asked for JSON in a fixed shape. Before anything reaches the page,
the function **rebuilds the result field by field**:

- Unknown fields are dropped; only fit, summary, matches, topics and questions survive.
- Every string is length-capped, and every list is limited (six matches, four
  topics, three questions).
- Project links are checked against the real project list, so the model can't
  invent one.
- Entries are cleaned _before_ the lists are capped, so one malformed item can't
  crowd out a good one. (A unit test caught that ordering bug.)

React escapes all text on render, so even a hostile string just shows up as text.

## 4. Keep the key on the server

The browser never talks to the AI provider. It posts to a Netlify Function,
which holds the API key in an environment variable marked secret. The key isn't
in the repo, the build output or the page.

The function also only accepts requests whose `Origin` matches the site itself,
which stops other websites from quietly using it as a free AI backend.

## 5. Make abuse boring, and free

A public endpoint will eventually get hammered. The goal isn't to make that
impossible; it's to make the worst case cheap and harmless:

- **Input limits:** 150 to 6,000 characters, rejected before any model call.
- **Rate limiting:** five checks per visitor per minute, enforced by the
  platform before my code even runs.
- **A timeout:** the model call is abandoned after nine seconds, safely under the
  function's limit.
- **A free tier as a hard cost cap:** the function uses its own free-tier
  account with no payment method. If someone burns through the daily quota, the
  feature says "busy" until tomorrow, and nothing can be charged.

Nothing the visitor pastes is stored or logged. Errors are logged by status code only.

## 6. Plan for the model disappearing

AI providers retire models. If the model name is baked into your code, a
retirement becomes an emergency deploy. Here the model is just a setting
(`GROQ_MODEL`) with a sensible default, so swapping it takes seconds and no code
change.

## 7. Test it without calling the AI

The tests replace the network call with a fake, so they run in milliseconds and
cost nothing. They cover wrong origins, a missing key, input that's too short or
too long, provider errors and a retired model, broken JSON, the output
sanitizing, and that the API key never appears in the prompt. They run on every
deploy, before the site builds.

## The takeaway

Wiring an LLM into a public site takes a few lines. Making it trustworthy is
everything else: grounding, validating in both directions, keeping secrets
server-side, and designing so the worst case is "temporarily busy", not "leaked"
or "billed".
