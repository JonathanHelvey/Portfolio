import SocialLinks from '../components/SocialLinks';

// Handled by Netlify Forms: Netlify finds this form in the pre-rendered HTML
// at deploy time. "bot-field" is a honeypot that real visitors never see.
export default function Contact() {
  return (
    <section className="section page contact">
      <h1 className="section-title">Contact Me!</h1>
      <p className="contact-intro">Have a project in mind, or just want to say hi? Send me a message.</p>
      <SocialLinks />
      <form className="contact-form" name="contact" method="POST" action="/thanks/" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
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
