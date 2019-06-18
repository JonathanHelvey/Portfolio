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
      <p className="jonathan">Contact Me!</p>
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
          <input type="hidden" name="form-name" value="contact" />
        </p>
        <p>
          <label>
            <input required type="text" name="name" placeholder="Name" />
          </label>
        </p>
        <p>
          <label>
            <input required type="email" name="email" placeholder="Email" />
          </label>
        </p>
        <p>
          <label>
            <input
              className="your-company"
              type="text"
              placeholder="Your Company?"
              name="company"
            />
          </label>
        </p>
        <p>
          <label>
            <input
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="resume-button">
          <a href={require("../templates/JonathanHelveyResume.pdf")} download>
            Jonathan Helvey Technical Resume PDF
          </a>
        </button>
      </div>
    </div>
    <Link className="your-company" to="/">
      Go back to the homepage
    </Link>
  </Layout>
)

export default Contact
