import { afterEach, beforeEach, test } from 'node:test';
import assert from 'node:assert/strict';
import handler, { MAX_CHARS, PROFILE, SYSTEM_PROMPT, sanitize } from '../netlify/functions/fit.mjs';

const SITE = 'https://www.jonathanhelvey.com';
const JOB = 'Senior engineer. '.repeat(20); // ~340 chars
const realFetch = globalThis.fetch;
let calls;
let reply;

beforeEach(() => {
  calls = [];
  reply = {
    status: 200,
    content: JSON.stringify({ fit: 'good', summary: 'Solid match.', matches: [], gaps: [], questions: [] }),
  };
  process.env.GROQ_API_KEY = 'test-key';
  delete process.env.GROQ_MODEL;
  globalThis.fetch = async (url, init) => {
    calls.push({ url, init, body: JSON.parse(init.body) });
    const body = reply.status === 200 ? { choices: [{ message: { content: reply.content } }] } : { error: 'x' };
    return new Response(JSON.stringify(body), { status: reply.status });
  };
});

afterEach(() => {
  globalThis.fetch = realFetch;
  delete process.env.GROQ_API_KEY;
});

async function ask(jobDescription, { origin = SITE, method = 'POST' } = {}) {
  const init = { method, headers: { Origin: origin, 'Content-Type': 'application/json' } };
  if (method === 'POST') init.body = JSON.stringify({ jobDescription });
  const response = await handler(new Request(`${SITE}/api/fit`, init));
  return { status: response.status, body: response.status === 405 ? null : await response.json() };
}

test('returns a sanitized result for a valid request', async () => {
  const { status, body } = await ask(JOB);
  assert.equal(status, 200);
  assert.deepEqual(body.result, { fit: 'good', summary: 'Solid match.', matches: [], gaps: [], questions: [] });
});

test('sends the profile and the job description, not the key, to the model', async () => {
  await ask(JOB);
  const [{ url, init, body }] = calls;
  assert.equal(url, 'https://api.groq.com/openai/v1/chat/completions');
  assert.equal(init.headers.Authorization, 'Bearer test-key');
  assert.equal(body.model, 'openai/gpt-oss-120b');
  assert.equal(body.messages[0].content, SYSTEM_PROMPT);
  assert.ok(body.messages[1].content.includes(JOB.trim()));
  assert.ok(!JSON.stringify(body.messages).includes('test-key'));
});

test('GROQ_MODEL overrides the model', async () => {
  process.env.GROQ_MODEL = 'some/other-model';
  await ask(JOB);
  assert.equal(calls[0].body.model, 'some/other-model');
  assert.equal(calls[0].body.reasoning_effort, undefined);
});

test('the profile leaves out draft projects', () => {
  assert.ok(PROFILE.includes('trendwake:'));
  assert.ok(!PROFILE.includes('upper-limits:'));
});

test('refuses other origins', async () => {
  assert.equal((await ask(JOB, { origin: 'https://evil.example' })).status, 403);
  assert.equal(calls.length, 0);
});

test('refuses GET', async () => {
  assert.equal((await ask(JOB, { method: 'GET' })).status, 405);
});

test('says when the API key is missing', async () => {
  delete process.env.GROQ_API_KEY;
  assert.deepEqual(await ask(JOB), { status: 503, body: { error: 'not-configured' } });
});

test('rejects too-short and too-long job descriptions without calling the model', async () => {
  assert.deepEqual((await ask('too short')).body, { error: 'too-short' });
  assert.deepEqual((await ask('x'.repeat(MAX_CHARS + 1))).body, { error: 'too-long' });
  assert.equal(calls.length, 0);
});

test('maps provider errors', async () => {
  reply.status = 429;
  assert.deepEqual(await ask(JOB), { status: 429, body: { error: 'busy' } });
  reply.status = 404; // e.g. a retired model
  assert.deepEqual(await ask(JOB), { status: 502, body: { error: 'ai-unavailable' } });
});

test('rejects unusable model output', async () => {
  reply.content = 'not json';
  assert.equal((await ask(JOB)).status, 502);
  reply.content = JSON.stringify({ fit: 'good', summary: '' });
  assert.equal((await ask(JOB)).status, 502);
});

test('sanitize keeps only known fields, caps lengths and drops unknown project ids', () => {
  const result = sanitize({
    fit: 'amazing',
    summary: 'x'.repeat(1000),
    secret: 'ignored',
    matches: Array.from({ length: 10 }, (_, i) => ({
      requirement: `req ${i}`,
      evidence: 'shown in a project',
      projects: ['trendwake', 'made-up', 'upper-limits'],
    })),
    gaps: [{ requirement: 'Kubernetes', note: 'not shown' }, { note: 'no requirement' }],
    questions: ['q1', 42, 'q2', 'q3', 'q4'],
  });
  assert.equal(result.fit, 'partial');
  assert.equal(result.summary.length, 600);
  assert.equal(result.secret, undefined);
  assert.equal(result.matches.length, 6);
  assert.deepEqual(result.matches[0].projects, ['trendwake']);
  assert.deepEqual(result.gaps, [{ requirement: 'Kubernetes', note: 'not shown' }]);
  assert.deepEqual(result.questions, ['q1', 'q2', 'q3']);
});
