import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from '../components/Nav'
import Header from '../components/Header'
import PostCard from '../components/PostCard'
import Sidebar from '../components/Sidebar'
import CallToAction from '../components/CallToAction'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allContentfulPost.edges
  console.log(posts)

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <header className="hero-section">
        <Nav />
        <Header />
      </header>
      <div className="home-grid">
        <section className="blog-section">
          
          {posts.map(post => {
            return (
              <PostCard
                key={post.node.slug}
                itemScope
                itemType="http://schema.org/Article"
                slug={post.node.slug}
                title={post.node.title}
                subtitle={post.node.subtitle}
                author={post.node.author}
                category={post.node.category}
                createdAt={post.node.createdAt}
              />
            )
          })}
        </section>
        <aside className="sidebar-section">
          <Sidebar />
        </aside>
        <section className="cta-section">
          <CallToAction />
        </section>
      </div>

      
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost {
      edges {
        node {
          title
          subtitle
          author
          slug
          category
          createdAt(fromNow: true)
        }
      }
    }  
  }
`

// Delete later!!
// <ol style={{ listStyle: `none` }}>
//         {posts.map(post => {
//           const title = post.node.title || post.node.slug
          
//           return (
//             <li key={post.node.slug}>
//               <article
//                 classNameName="post-list-item"
//                 itemScope
//                 itemType="http://schema.org/Article"
//               >
//                 <header>
//                   <h2>
//                     <Link to={post.node.slug} itemProp="url">
//                       <span itemProp="headline">{title}</span>
//                     </Link>
//                   </h2>
//                   <small>{post.frontmatter.date}</small>
//                 </header>
//                 <section>
//                   <p>{post.node.subtitle}</p>
//                 </section>
//               </article>
//             </li>
//           )
//         })}
//       </ol>