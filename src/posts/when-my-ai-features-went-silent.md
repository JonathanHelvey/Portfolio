---
title: "When my AI features went silent (and nothing errored)"
slug: "when-my-ai-features-went-silent"
date: "2026-10-08"
description: "An LLM provider retired the model my app used. Every AI feature quietly went blank, and my error handling is why nobody noticed. What I changed."
published: false
---

<!-- DRAFT: review before setting published: true. -->

TrendWake, the trading-ideas platform I build, has a handful of AI features:
trade reviews, market summaries and a coach you can ask questions. They all run
through one small client that calls an LLM provider.

In August 2026 the provider retired the model that client was pinned to. From
that moment, every request failed. And every AI feature on the site quietly
went blank.

## Failing soft, a little too well

I had written the AI client to **fail soft**: if the model call errors, log
it, return nothing, and let the page render without the AI section. That's a
good instinct. An LLM outage shouldn't take down a dashboard.

But "return nothing" looked exactly like "the model had nothing to say." No
error page, no alert, no angry users. Just empty boxes where the AI used to be.

## What actually broke

- **The model name was hard-coded as a default** in the client, with no
  environment override in production. Swapping models meant a code change and
  a deploy, not a config flip.
- **Deprecation notices went to an inbox I wasn't watching.** The provider
  announced it; I just never saw it.
- **"Empty" and "failed" were the same state.** The UI couldn't tell them
  apart, so neither could I.

## The fix, and what I'd do differently

The immediate fix was simple: point the client at a current model and deploy.
The real lessons were about everything around it:

<!-- DRAFT: keep only the items you've actually done, and move the rest
     under a "Next up" heading. -->

1. **Make the model configuration**, with a sensible code default, so a
   retired model is an env change instead of an emergency deploy.
2. **Count failures, don't just log them.** A burst of AI errors should
   raise an alert instead of disappearing into log files.
3. **Tell "unavailable" apart from "nothing to show"** in the UI, so a broken
   AI feature is visible to me (and honest with users).
4. **Smoke-test AI features daily**: call each one and check for a real
   answer.

## The takeaway

Graceful degradation is only graceful if *someone* finds out it happened.
When you build on third-party models, assume the model you're using today
will disappear, and make sure that day is loud.
