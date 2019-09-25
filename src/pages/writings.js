import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const Blog = ({ data }) => (
  <Layout>
    <SEO title="blog" />
    <h1>Blog</h1>
    <p>Come back later!</p>
    <ul>
      {data.allMarkdownRemark.edges.map(post => (
        <a key={post.node.id} href={post.node.frontmatter.path}>
          <li>{post.node.frontmatter.title}</li>
        </a>
      ))}
    </ul>
  </Layout>
)

export const pageQuery = graphql`
  query indexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

export default Blog
