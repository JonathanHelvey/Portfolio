import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"

function draw() {
  var ctx = document.getElementById("canvas").getContext("2d")
  var img = new Image()
  img.onload = function() {
    ctx.drawImage(img, 0, 0)
    ctx.beginPath()
    ctx.moveTo(30, 96)
    ctx.lineTo(70, 66)
    ctx.lineTo(103, 76)
    ctx.lineTo(170, 15)
    ctx.stroke()
  }
  img.src = "https://mdn.mozillademos.org/files/5395/backdrop.png"
}

const Contact = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <h1 style={{ float: "right" }}>
      This page is a work in progress, please come back later!
    </h1>
    <p>Resume is on the way!</p> 
    <body onload="draw();">
         <canvas id="canvas" width="180" height="150" /> 
    </body>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

// export const query = graphql`
//   query {
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `

export default Contact
