import React from "react"
import Layout from "../components/layout"
import SocialMedia from "../components/socialMedia"
import SEO from "../components/seo"

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
      <div style={{ display: "flex", justifyContent: "center", margin: "0px" }}>
        <button className="resume-button">
          <a href={require("../templates/JonathanHelveyResume.pdf")} download>
            Resume PDF
          </a>
        </button>
      </div>
      <div className="index-con4">
        <SocialMedia />
      </div>
    </div>
  </Layout>
)

export default Contact
