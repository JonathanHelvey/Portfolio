import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1 style={{ float: "right" }}>Hi, this page is a work in progress.</h1>
    <p>Resume is on the way!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
