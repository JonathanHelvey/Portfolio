import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1 style={{ float: "right" }}>Hi from the CONTACT page</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/contact/">CONTACT</Link>
  </Layout>
)

export default Contact
