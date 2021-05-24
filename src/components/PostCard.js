import React from 'react';
import { Link } from 'gatsby';

const PostCard = ({ slug, title, subtitle, category, createdAt, imageUrl }) => {
  return (
    <div className="postCard">
      <Link
        to={`/${slug}`}
        className="postCard__left"
        style={{
          backgroundImage: `url(${imageUrl})`,
          opacity: '.9',
        }}
      ></Link>
      <div className="postCard__right">
        <h5 className="postCard__category">{category}</h5>
        <h4 className="postCard__title">
          <Link to={`/${slug}`}>{title}</Link>
        </h4>
        <p className="postCard__text">{subtitle}</p>
        <Link to={`/${slug}`} className="btn postCard__btn">
          Read More
        </Link>
        <small className="postCard__date">{createdAt}</small>
      </div>
    </div>
  );
};

export default PostCard;
