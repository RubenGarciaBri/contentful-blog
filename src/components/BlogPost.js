import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import RelatedPost from "./RelatedPost"
import AuthorBio from "./AuthorBio"
import { shuffle } from "../utils/helpers"

const Bold = ({ children }) => (
  <span style={{ fontWeight: "bold" }}>{children}</span>
)
const Text = ({ children }) => (
  <p style={{ fontSize: "18px", lineHeight: "32px" }}>{children}</p>
)

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
  },
}

const BlogPost = ({
  title,
  category,
  content,
  imageUrl,
  createdAt,
  allPosts,
}) => {
  // Exlude current post from the list
  const filteredPosts = allPosts.filter(post => post.node.title !== title)
  // Randomise posts and set a maximum number of 3
  const shuffledPosts = shuffle(filteredPosts).slice(0, 3)

  return (
    <>
      <div
        className="post-header"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <article className="post">
        <h5 className="post__category">{category}</h5>
        <h3 className="post__title">{title}</h3>
        <article className="post__content">
          {renderRichText(content, options)}
        </article>
        <small className="post__date">Published {createdAt}</small>
        <AuthorBio />
      </article>
      <div className="post__related">
        <h4 className="post__relatedHeading">Related Posts</h4>
        <div className="post__relatedWrapper">
          {shuffledPosts.map(post => {
            return <RelatedPost post={post} />
          })}
        </div>
      </div>
    </>
  )
}

export default BlogPost
