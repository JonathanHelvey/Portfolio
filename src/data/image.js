import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        guessingGame: file(relativePath: { eq: "guessing-game.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        popNSpots: file(relativePath: { eq: "popnspotsmap.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tour: file(relativePath: { eq: "tourScan.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        portfolio: file(relativePath: { eq: "Portfolio.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        edmazon: file(relativePath: { eq: "edmazon.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        colorGenerator: file(relativePath: { eq: "colorGenerator.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.guessingGame.childImageSharp.fluid} />}
    render={data => <Img fluid={data.popNSpts.childImageSharp.fluid} />}
    render={data => <Img fluid={data.tour.childImageSharp.fluid} />}
    render={data => <Img fluid={data.portfolio.childImageSharp.fluid} />}
    render={data => <Img fluid={data.edmazon.childImageSharp.fluid} />}
    render={data => <Img fluid={data.colorGenerator.childImageSharp.fluid} />}
  />
)

export default Image
