import React from 'react';
import { Link } from 'gatsby';

const Header = ({ title, subtitle, cta }) => {
  return (
    <div className="hero container">
      <h1 className="hero__heading">
        Welcome to <span className="hero__heading--stylishText">{title}</span>
      </h1>
      <h2 className="hero__subheading">{subtitle}</h2>
      <Link to="#!" className="btn hero__btn">
        {cta}
      </Link>
    </div>
  );
};

export default Header;
