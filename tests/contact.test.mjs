import { afterEach, beforeEach, test } from 'node:test';
import assert from 'node:assert/strict';
import handler from '../netlify/functions/contact.mjs';

const SITE = 'https://www.jonathanhelvey.com';
const realFetch = globalThis.fetch;
let forwarded;
let forwardStatus;

beforeEach(() => {
  forwarded = [];
  forwardStatus = 200;
  globalThis.fetch = async (url, init) => {
    forwarded.push({ url, body: new URLSearchParams(String(init.body)) });
    return new Response('ok', { status: forwardStatus });
  };
});

afterEach(() => {
  globalThis.fetch = realFetch;
});

const secondsAgo = (seconds) => String(Date.now() - seconds * 1000);
const legit = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  company: 'Analytical Co',
  message: 'Hi Jonathan, we need help rebuilding our React app. Can we talk next week?',
  started: secondsAgo(30),
};

async function submit(fields, method = 'POST') {
  const body = method === 'POST' ? new URLSearchParams(fields) : undefined;
  const response = await handler(new Request(`${SITE}/api/contact`, { method, body }));
  return { status: response.status, location: response.headers.get('Location')?.replace(SITE, '') };
}

const delivered = [
  ['a normal message', legit],
  ['one mention of SEO', { ...legit, message: 'Could you also look at the SEO on our marketing site?' }],
  ['one link', { ...legit, message: 'Our site is https://example.com, can you modernize it?' }],
];

for (const [label, fields] of delivered) {
  test(`delivers ${label}`, async () => {
    assert.deepEqual(await submit(fields), { status: 303, location: '/thanks/' });
    assert.equal(forwarded.length, 1);
  });
}

const spam = [
  ['a filled honeypot', { ...legit, 'bot-field': 'x' }],
  ['no JavaScript', { ...legit, started: '' }],
  ['a 1-second submit', { ...legit, started: secondsAgo(1) }],
  ['a 2-day-old form', { ...legit, started: secondsAgo(2 * 24 * 60 * 60) }],
  ['a link in the name', { ...legit, name: 'Cheap SEO www.spam.biz' }],
  ['three links', { ...legit, message: 'a http://a.com b http://b.com c http://c.com' }],
  ['a marketing pitch', { ...legit, message: 'Attract high-quality leads and get more traffic with our SEO services!' }],
  ['a spam phrase plus a link', { ...legit, message: 'We offer guest posts, see https://spam.biz' }],
];

for (const [label, fields] of spam) {
  test(`silently drops ${label}`, async () => {
    assert.deepEqual(await submit(fields), { status: 303, location: '/thanks/' });
    assert.equal(forwarded.length, 0);
  });
}

test('sends invalid input back to the form', async () => {
  assert.equal((await submit({ ...legit, email: 'not-an-email' })).location, '/contact/?error=invalid');
  assert.equal((await submit({ ...legit, message: '' })).location, '/contact/?error=invalid');
  assert.equal(forwarded.length, 0);
});

test('refuses GET', async () => {
  assert.equal((await submit({}, 'GET')).status, 405);
});

test('reports a Netlify Forms failure', async () => {
  forwardStatus = 500;
  assert.equal((await submit(legit)).location, '/contact/?error=send');
});

test('forwards only the visitor fields to contact-verified', async () => {
  await submit(legit);
  const [{ url, body }] = forwarded;
  assert.equal(url, `${SITE}/`);
  assert.equal(body.get('form-name'), 'contact-verified');
  assert.equal(body.get('email'), legit.email);
  assert.ok(!body.has('started') && !body.has('bot-field'));
});
