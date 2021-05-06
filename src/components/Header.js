import React from 'react'
import { Link, graphql } from "gatsby"

const Header = () => {
  return (
    <div className="hero container">
      <h1 className="hero__heading">Welcome to<br/><span className="hero__heading--stylishText">Living A Mindful Life</span>
      </h1>
      <h2 className="hero__subheading">A personal development blog about travel, wellness and life hacking that you'll
        love
      </h2>
      <Link to="/" className="btn hero__btn">Subscribe Now</Link>
    </div>
  )
}

export default Header
