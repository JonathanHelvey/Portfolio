// Spam filter in front of Netlify Forms.
//
// The contact page posts here instead of straight to Netlify Forms. Messages
// that pass the checks are forwarded to the "contact-verified" form (declared
// in public/netlify-forms.html), so they still show up in the Netlify
// dashboard and notifications. Spam gets the normal "thanks" page so bots
// can't tell they were caught; the reason is logged in the function logs.

export const FORM_NAME = 'contact-verified';
const MIN_SECONDS = 3;
const MAX_AGE_MS = 24 * 60 * 60 * 1000;
const LIMITS = { name: 100, email: 200, company: 200, message: 5000 };

// Phrases from typical SEO/marketing/scam pitches. One phrase alone isn't
// enough to reject (a real client might mention SEO); two, or one plus a
// link, is.
const SPAM_PHRASES = [
  /\bseo\b/i,
  /\bback ?links?\b/i,
  /\bguest posts?\b/i,
  /\b(first|top) page of google\b/i,
  /\brank(ing)? (higher|on google|your (web)?site)\b/i,
  /\b(more|organic|targeted) traffic\b/i,
  /\blead generation\b/i,
  /\battract high/i,
  /\bhigh[- ]quality leads\b/i,
  /\bincrease (your )?(sales|revenue|conversions)\b/i,
  /\b(web ?design|marketing|seo|development) (services|agency|team) (for|to) (you|your)\b/i,
  /\b(crypto|bitcoin|forex|casino|viagra|cialis)\b/i,
  /\bunsubscribe\b/i,
];

const URL_PATTERN = /(https?:\/\/|www\.)\S+/gi; // for counting (global)
const HAS_URL = /(https?:\/\/|www\.)\S+/i; // for testing (no shared lastIndex)
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function spamReason(fields, now = Date.now()) {
  if (fields.botField) return 'honeypot';

  const started = Number(fields.started);
  if (!started) return 'no-js';
  const elapsed = now - started;
  if (elapsed < MIN_SECONDS * 1000) return 'too-fast';
  if (elapsed > MAX_AGE_MS) return 'stale-form';

  if (HAS_URL.test(`${fields.name} ${fields.company}`)) return 'link-in-name';
  const links = (fields.message.match(URL_PATTERN) ?? []).length;
  if (links > 2) return 'too-many-links';

  const phrases = SPAM_PHRASES.filter((pattern) => pattern.test(fields.message)).length;
  if (phrases >= 2 || (phrases >= 1 && links >= 1)) return 'spam-phrases';

  return null;
}

export function invalidReason(fields) {
  if (!fields.name || !fields.email || !fields.message) return 'missing-field';
  if (!EMAIL_PATTERN.test(fields.email)) return 'bad-email';
  for (const [key, max] of Object.entries(LIMITS)) {
    if (fields[key].length > max) return `${key}-too-long`;
  }
  return null;
}

const redirect = (origin, path) => new Response(null, { status: 303, headers: { Location: `${origin}${path}` } });

export default async function handler(request) {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
  }

  const { origin } = new URL(request.url);
  let form;
  try {
    form = await request.formData();
  } catch {
    return redirect(origin, '/contact/?error=invalid');
  }

  const text = (key) => String(form.get(key) ?? '').trim();
  const fields = {
    name: text('name'),
    email: text('email'),
    company: text('company'),
    message: text('message'),
    botField: text('bot-field'),
    started: text('started'),
  };

  const spam = spamReason(fields);
  if (spam) {
    console.log(`contact: rejected as spam (${spam})`);
    return redirect(origin, '/thanks/');
  }

  const invalid = invalidReason(fields);
  if (invalid) {
    console.log(`contact: rejected as invalid (${invalid})`);
    return redirect(origin, '/contact/?error=invalid');
  }

  // Netlify Forms accepts a urlencoded POST to any page with the form name.
  const response = await fetch(`${origin}/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      'form-name': FORM_NAME,
      name: fields.name,
      email: fields.email,
      company: fields.company,
      message: fields.message,
    }),
  });

  if (!response.ok) {
    console.error(`contact: Netlify Forms returned ${response.status}`);
    return redirect(origin, '/contact/?error=send');
  }
  return redirect(origin, '/thanks/');
}

export const config = { path: '/api/contact' };
