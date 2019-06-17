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
    <p>Resume is on the way!</p> <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
