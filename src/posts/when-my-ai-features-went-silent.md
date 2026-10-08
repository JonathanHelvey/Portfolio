---
title: "When my AI features went silent (and nothing errored)"
slug: "when-my-ai-features-went-silent"
date: "2026-10-08"
description: "Groq retired the model my app used. Every AI feature quietly went blank, and my error handling is why nobody noticed. What I changed."
published: true
---

TrendWake, the trading-ideas platform I build, has a handful of AI features:
LLM trade reviews, market summaries, and a coach you can ask questions. They
all run through one small client that calls Groq.

On 2026-08-16, Groq retired the model that client was pinned to,
llama-3.3-70b. From that moment, every request to Groq failed. And every AI
feature on the site quietly went blank.

## Failing soft, a little too well

I had written the AI client to **fail soft**: if the model call errors, log
it, return nothing, and let the page render without the AI section. That's a
good instinct. An LLM outage shouldn't take down a dashboard.

But "return nothing" looked exactly like "the model had nothing to say." No
error page, no alert, no angry users. Just empty boxes where the AI used to
be. The failure mode I'd designed for turned out to be indistinguishable
from the normal, boring case of an LLM declining to generate anything
useful.

## What actually broke

- **The model name was hard-coded as a default** in the client, with no
  environment override in production. Swapping models meant a code change
  and a deploy, not a config flip.
- **"Empty" and "failed" were the same state.** The UI couldn't tell them
  apart, so neither could I. A blank trade review and a Groq outage rendered
  identically.
- **Nothing was watching the failures.** They went to logs, and logs only
  help if something or someone is looking at them.

## The fix, and what I'd do differently

The immediate fix was mechanical: point the client at openai/gpt-oss-120b
and deploy. That brought every AI feature back.

The deeper problem was that a retired model required a deploy instead of a
config change, and I built my next AI feature around it. My portfolio site
has a small "AI fit check" that also calls Groq, and it reads its model name
from a `GROQ_MODEL` environment variable instead of a hard-coded default. The
next time a model gets retired there, it's a config change, not an emergency
deploy.

A few other things I'd like to add, though I haven't built them yet:

1. **Count failures, don't just log them.** A burst of AI errors should
   raise an alert somewhere I'll actually see it, instead of sitting quietly
   in log files until I go looking.
2. **Tell "unavailable" apart from "nothing to show"** in the UI. If a
   feature's AI call failed, the page should say so, instead of rendering
   the same blank state as a model that genuinely had nothing useful to
   generate.
3. **Smoke-test the AI features daily.** A scheduled check that calls each
   feature and confirms it got back a real answer would have caught this
   the day the model was retired, not whenever I happened to look at the
   site myself.

None of those are hard. I just hadn't needed them before, because I'd never
had a provider pull a model out from under me.

## The takeaway

Graceful degradation is only graceful if *someone* finds out it happened.
My error handling did exactly what I told it to do: it hid the failure so
well that it also hid itself. When you build on third-party models, assume
the model you're using today will eventually disappear, and make sure that
day is loud instead of quiet.
