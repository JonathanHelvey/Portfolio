import React from "react"
import Layout from "../components/layout"
import SocialMedia from "../components/socialMedia"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Contact = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <div className="form">
      <p className="contact-title">Contact Me!</p>
      <form
        className="form"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success"
      >
        <button type="hidden" disabled />
        <div>
          <SocialMedia />
        </div>{" "}
        <div className="my-buttons-container">
          <Link className="resume-button" to="/resume/">
            <button className="resume-button">Resume!</button>
          </Link>
        </div>
        <p>
          <input
            className="form-input"
            type="hidden"
            name="form-name"
            value="contact"
          />
        </p>
        <p>
          <label>
            <input
              className="form-input"
              required
              type="text"
              name="name"
              placeholder="Name"
            />
          </label>
        </p>
        <p>
          <label>
            <input
              className="form-input"
              required
              type="email"
              name="email"
              placeholder="Email"
            />
          </label>
        </p>
        <p>
          <label>
            <input
              className="form-input"
              type="text"
              placeholder="Company Name"
              name="company"
            />
          </label>
        </p>
        <p>
          <label>
            <textarea
              className="form-message"
              type="text"
              placeholder="Message"
              name="message"
            />
          </label>
        </p>
        <p>
          <button className="form-button" type="submit">
            Send
          </button>
        </p>
      </form>
    </div>
  </Layout>
)

export default Contact
