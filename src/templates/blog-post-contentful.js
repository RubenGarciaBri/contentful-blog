import * as React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from '../components/Nav'
import BlogPost from '../components/BlogPost'

const BlogPostContentfulTemplate = ({ pageContext, data, location }) => {
  const allPosts = data.allContentfulPost.edges
  const post = data.contentfulPost
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previousPost, nextPost } = pageContext
  const image = `http:${data.contentfulPost.image.fluid.src}`

  console.log(pageContext)
  
  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.title}
        description={post.subtitle || post.excerpt}
      />
      <header className="hero-section">
        <Nav />
      </header>
        <section class="blogpost-section container">
          <BlogPost
            title={post.title}
            subtitle={post.subtitle}
            author={post.author}
            content={post.content}
            imageUrl={post.image.fluid.src}
            createdAt={post.createdAt}
            allPosts={allPosts}
          />
        </section>
    </Layout>
  )
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug(
    $slug: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      title
      subtitle
      author
      category  
      createdAt(fromNow: true)
      image {
        fluid {
          src
        }
      }
      content {
        raw
      }
    }
    allContentfulPost {
      edges {
        node {
          title
          slug
          createdAt(fromNow: true)
          image {
            fluid {
              src
            }
          }
        }
      }
    }  
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
