import React from "react"
import { Link } from "gatsby"
// import { css } from "@emotion/core"
// import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"

//

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
            Resume PDF ⬇️
          </a>
        </button>
      </div>
      {/* SOcial Stack Could Make this into a component! */}
      <div className="index-con4">
        <a href="https://www.linkedin.com/in/jonathanhelvey/">
          <img
            className="social-logos-img"
            src={require("../images/linkedin-logo.png")}
            alt="social-sites"
          />
        </a>
        <a href="https://github.com/JonathanHelvey">
          <img
            className="social-logos-img"
            src={require("../images/github.png")}
            alt="social-sites"
          />
        </a>
        <a href="https://twitter.com/JonathanHelvey">
          <img
            className="social-logos-img"
            src={require("../images/twitter.png")}
            alt="social-sites"
          />
        </a>
      </div>
    </div>
  </Layout>
)

export default Contact
