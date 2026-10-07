import { useEffect, useRef, useSyncExternalStore } from 'react';
import SocialLinks from '../components/SocialLinks';

const ERRORS = {
  invalid: 'Please fill in your name, a valid email and a message, then try again.',
  send: "Sorry, your message didn't go through. Please try again, or reach me on LinkedIn.",
};

const subscribe = () => () => {};
const errorCode = () => new URLSearchParams(window.location.search).get('error');

// Posts to /api/contact (netlify/functions/contact.mjs), which screens for
// spam and forwards real messages to Netlify Forms. "started" is filled in
// by JavaScript when the page loads: most spam bots never run it, and the
// function rejects forms sent back within a few seconds.
export default function Contact() {
  const started = useRef(null);
  const code = useSyncExternalStore(subscribe, errorCode, () => null);
  const error = code ? (ERRORS[code] ?? ERRORS.send) : null;

  useEffect(() => {
    started.current.value = String(Date.now());
  }, []);

  return (
    <section className="section page contact">
      <h1 className="section-title">Contact Me!</h1>
      <p className="contact-intro">Have a project in mind, or just want to say hi? Send me a message.</p>
      <SocialLinks />
      <form className="contact-form" name="contact" method="POST" action="/api/contact">
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        <input type="hidden" name="started" ref={started} />
        <p className="honeypot" aria-hidden="true">
          <label>
            Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>
        <label>
          Name
          <input type="text" name="name" required maxLength={100} autoComplete="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" required maxLength={200} autoComplete="email" />
        </label>
        <label>
          Company <span className="optional">(optional)</span>
          <input type="text" name="company" maxLength={200} autoComplete="organization" />
        </label>
        <label>
          Message
          <textarea name="message" rows={6} required maxLength={5000} />
        </label>
        <button className="button button-large" type="submit">
          Send
        </button>
      </form>
    </section>
  );
}
