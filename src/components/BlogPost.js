import React from 'react'

const BlogPost = ({ title, subtitle, author, category, content, imageUrl, createdAt}) => {
  return (
    <>
      <div
      className="post-header"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}>
      </div>
      <article className="post">
        <h5 className="post__category">{category}</h5>
        <h3 className="post__title">{title}</h3>
        <p className="post__paragraph">{content}</p>
        <small>{createdAt}</small>
      </article>
    </>
  )
}

export default BlogPost
