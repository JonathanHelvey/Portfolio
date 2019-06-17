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
        <p>
          <input type="hidden" name="form-name" value="contact" />
        </p>
        <p>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email: <input type="email" name="email" />
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
          <button className="form-button" type="submit">
            Send
          </button>
        </p>
      </form>
      <div>
        <h3 style={{ fontSize: "20px" }}>jonathanhelvey27@gmail.com</h3>
      </div>
    </div>
    <br /> 
    <Link className="your-company" to="/">
      Go back to the homepage
    </Link>
  </Layout>
)

export default Contact
