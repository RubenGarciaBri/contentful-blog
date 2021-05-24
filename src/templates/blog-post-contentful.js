import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Nav from '../components/Nav';
import BlogPost from '../components/BlogPost';

const BlogPostContentfulTemplate = ({ data, location }) => {
  const allPosts = data.allContentfulPost.edges;
  const post = data.contentfulPost;
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Nav />
      <section class="blogpost-section container">
        <BlogPost
          title={post.title}
          subtitle={post.subtitle}
          content={post.content}
          imageUrl={post.image.fluid.src}
          createdAt={post.createdAt}
          allPosts={allPosts}
        />
      </section>
    </Layout>
  );
};

export default BlogPostContentfulTemplate;

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
`;
