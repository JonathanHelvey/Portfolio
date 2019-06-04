import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page ABOUT ME</p>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/about/">About Me</Link>
  </Layout>
)

export default About
