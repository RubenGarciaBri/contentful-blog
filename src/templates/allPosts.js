import React from 'react'
import { graphql } from "gatsby"
import { PostCard } from '../components/PostCard'
import { Pager } from '../components/Pager'

const allPosts = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  const posts = data.allMdx.edges

  return (
    <>
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
            imageUrl={post.node.image.fluid.src}
          />
        )
      })}
      <Pager pageContext={pageContext}/>
    </>
  )
}

export default allPosts
