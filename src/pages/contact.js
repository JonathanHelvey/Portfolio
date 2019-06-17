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
    <div>
      <p>Contact Me!</p>
      <h3>jonathanhelvey27@gmail.com</h3>
      <br />
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <p>
          <label>
            Name <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email <input type="email" name="email" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
     <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
