import { useState } from 'react';
import { PROJECTS } from '../data/projects';

// Keep in sync with netlify/functions/fit.mjs.
const MIN_CHARS = 150;
const MAX_CHARS = 6000;

const PROJECT_TITLES = Object.fromEntries(PROJECTS.map((project) => [project.id, project.title]));

const FIT_LABELS = {
  strong: 'Strong fit',
  good: 'Good fit',
  partial: 'Partial fit',
  'not-a-job-description': 'Not a job description',
};

const ERRORS = {
  'too-short': `Please paste a bit more of the job description (at least ${MIN_CHARS} characters).`,
  'too-long': `That's a long one! Please trim it to ${MAX_CHARS.toLocaleString()} characters.`,
  busy: 'Lots of people are checking right now. Please try again in a minute.',
  'not-configured': "The AI fit check isn't switched on yet. Please check back soon.",
  default: "Sorry, the AI fit check isn't available right now. Please try again, or reach out directly.",
};

const SAMPLE = `Senior Full Stack Engineer

We're looking for an engineer to build and own customer-facing features end to end.

Requirements:
- 5+ years building web applications with React and a modern back end (Node.js or PHP)
- Strong experience with PostgreSQL and designing REST APIs
- Experience with search (Elasticsearch or similar)
- Comfortable with CI/CD, cloud infrastructure and production on-call
- Security-minded: authentication, OWASP best practices

Nice to have:
- Experience integrating LLMs or building AI features
- Payments (Stripe), e-commerce
- TypeScript, Kubernetes`;

export default function Fit() {
  const [jobDescription, setJobDescription] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | done | error
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  async function onSubmit(event) {
    event.preventDefault();
    setStatus('loading');
    setError('');
    try {
      const response = await fetch('/api/fit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobDescription }),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(response.status === 429 ? 'busy' : body.error);
      setResult(body.result);
      setStatus('done');
    } catch (failure) {
      setError(ERRORS[failure.message] ?? ERRORS.default);
      setStatus('error');
    }
  }

  const length = jobDescription.trim().length;

  return (
    <section className="section page fit">
      <h1 className="section-title">AI Fit Check</h1>
      <p className="fit-intro">
        Hiring? Paste a job description and get an honest, AI-generated read on how my experience fits, gaps included.
        It only uses what&apos;s on this site, and nothing you paste is stored.
      </p>

      <form className="fit-form" onSubmit={onSubmit}>
        <label htmlFor="job-description">Job description</label>
        <textarea
          id="job-description"
          value={jobDescription}
          onChange={(event) => setJobDescription(event.target.value)}
          rows={10}
          maxLength={MAX_CHARS}
          placeholder="Paste the role's responsibilities and requirements here…"
        />
        <div className="fit-actions">
          <button className="button" type="submit" disabled={status === 'loading' || length < MIN_CHARS}>
            {status === 'loading' ? 'Checking…' : 'Check my fit'}
          </button>
          <button
            className="button button-ghost"
            type="button"
            onClick={() => setJobDescription(SAMPLE)}
            disabled={status === 'loading'}
          >
            Try a sample job
          </button>
          <span className="fit-count" aria-live="polite">
            {length < MIN_CHARS ? `${MIN_CHARS - length} more characters needed` : `${length} / ${MAX_CHARS}`}
          </span>
        </div>
      </form>

      {status === 'loading' && (
        <output className="fit-loading">
          <span />
          <span />
          <span />
          Reading the job description…
        </output>
      )}

      {status === 'error' && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      {status === 'done' && result && (
        <div className="fit-result" aria-live="polite">
          <p className={`fit-badge fit-${result.fit}`}>{FIT_LABELS[result.fit]}</p>
          <p className="fit-summary">{result.summary}</p>

          {result.matches.length > 0 && (
            <>
              <h2>Where I match</h2>
              <ul className="fit-list fit-matches">
                {result.matches.map((match) => (
                  <li key={match.requirement}>
                    <strong>{match.requirement}</strong>
                    <p>{match.evidence}</p>
                    {match.projects.length > 0 && (
                      <p className="fit-projects">
                        {match.projects.map((id) => (
                          <a key={id} href={`/#project-${id}`}>
                            {PROJECT_TITLES[id]}
                          </a>
                        ))}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}

          {result.gaps.length > 0 && (
            <>
              <h2>Gaps to discuss</h2>
              <ul className="fit-list fit-gaps">
                {result.gaps.map((gap) => (
                  <li key={gap.requirement}>
                    <strong>{gap.requirement}</strong>
                    {gap.note && <p>{gap.note}</p>}
                  </li>
                ))}
              </ul>
            </>
          )}

          {result.questions.length > 0 && (
            <>
              <h2>Good questions to ask me</h2>
              <ul className="fit-list fit-questions">
                {result.questions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
            </>
          )}

          <p className="fit-disclaimer">
            Generated by an AI model from the facts on this site. It can make mistakes, so let&apos;s talk!
          </p>
          <a className="button button-large" href="/contact/">
            Get in touch
          </a>
        </div>
      )}
    </section>
  );
}
