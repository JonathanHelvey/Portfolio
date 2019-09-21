import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const Blog = ({ data }) => (
  <Layout>
    <SEO title="blog" />
    <h1>Blog</h1>
    <p>Come back later!</p>
    {data.allMarkdownRemark.edges.map(post => (
      <a key={post.node.id} href={post.node.frontmatter.path}>
        {post.node.frontmatter.title}
      </a>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query indexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default Blog
