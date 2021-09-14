import * as React from 'react';
import { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Nav from '../components/Nav';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import Sidebar from '../components/Sidebar';
import CallToAction from '../components/CallToAction';
import Pagination from '../components/Pagination';
import MetaDecorator from '../utils/MetaDecorator';

const BlogIndex = ({ data, location }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  // Load posts after API call
  useEffect(() => {
    setPosts(data.allContentfulPost.edges);
  }, []);

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <MetaDecorator/>
        <header className="hero-section">
          <Nav />
          <Header
            title="Mindful Living"
            subtitle="A personal development blog about travel, wellness and life hacking that you'll love"
            cta="Subscribe Now"
          />
        </header>
        <div className="home-grid">
          <section className="blog-section">
            <p>Loading posts...</p>
          </section>
          <aside className="sidebar-section">
            <Sidebar
              title="About Me"
              description="Hi, my name is Marina and I'm a full-time journalist and fashion expert. I've recently started this blog to share my message with the world."
            />
          </aside>
          <section className="cta-section">
            <CallToAction
              title="Ready to level up your life?"
              subtitle="Click on the button below and receive my weekly newsletter with the best content of the blog"
              cta="Subscribe Now"
            />
          </section>
        </div>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <header className="hero-section">
        <Nav />
        <Header
          title="Mindful Living"
          subtitle="A personal development blog about travel, wellness and life hacking that you'll love"
          cta="Subscribe Now"
        />
      </header>
      <div className="home-grid">
        <section className="blog-section">
          {currentPosts.map(post => {
            return (
              <PostCard
                key={post.node.slug}
                itemScope
                itemType="http://schema.org/Article"
                slug={post.node.slug}
                title={post.node.title}
                subtitle={post.node.subtitle}
                category={post.node.category}
                createdAt={post.node.createdAt}
                imageUrl={post.node.image.fluid.src}
                content={post.node.content}
              />
            );
          })}
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </section>
        <aside className="sidebar-section">
          <Sidebar
            title="About Me"
            description="Hi, my name is Marina and I'm a full-time journalist and fashion expert. I've recently started this blog to share my message with the world."
          />
        </aside>
        <section className="cta-section">
          <CallToAction
            title="Ready to level up your life?"
            subtitle="Click on the button below and receive my weekly newsletter with the best content of the blog"
            cta="Subscribe Now"
          />
        </section>
      </div>
    </Layout>
  );
};

export default BlogIndex;

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
          slug
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
      }
    }
  }
`;
