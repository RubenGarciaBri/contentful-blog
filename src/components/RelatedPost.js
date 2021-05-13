import React from 'react'
import { Link } from "gatsby"

const RelatedPost = ({ post }) => {
  const { title, createdAt, slug } = post.node
  const imageUrl = post.node.image.fluid.src

  return (
    <div className="post__relatedWrapper-box">
      <Link
        to={`/${slug}`}
      >
        <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          opacity: '.9'
        }}
        className="post__relatedWrapper-boxImg">
        </div>
      </Link>
      <div className="post__relatedWrapper-boxBottom">
        <Link to={`/${slug}`}>
          <h5 className="post__relatedWrapper-boxBottom-title">{title}</h5>
        </Link>
        <h5 className="post__relatedWrapper-boxBottom-date">{createdAt}</h5>
      </div>
    </div>
  )
}

export default RelatedPost
