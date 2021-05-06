import React from 'react'
import { Link, graphql } from "gatsby"

const PostCard = ({ slug, author, title, subtitle, category, createdAt, imageUrl}) => {
  return (
    <div className="postCard">
      <Link
      to={`/${slug}`}
      className="postCard__left"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      >
        {/* <img src={image} alt='Post main picture' className="postCard__left-img"/> */}
      </Link>
      <div className="postCard__right">
        <h5 className="postCard__category">{category}</h5>
        <h4 className="postCard__title">
          <Link to="#">
            {title}
          </Link>
        </h4>
        <p className="postCard__text">{subtitle}</p>
        <Link to={`/${slug}`} className="btn postCard__btn">Read More</Link>
        <ul className="postCard__bottomList">
          <li className="postCard__bottomList-item">{createdAt}</li>
          {/* <li className="postCard__bottomList-item">112 <i className="far fa-heart postCard__icon"></i></li>
          <li className="postCard__bottomList-item">3<i className="far fa-comment postCard__icon"></i></li> */}
        </ul>
      </div>
    </div>
  )
}

export default PostCard
