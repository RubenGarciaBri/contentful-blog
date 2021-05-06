import React from 'react'
import { Link, graphql } from "gatsby"

const Header = () => {
  return (
    <div class="hero container">
      <h1 class="hero__heading">Welcome to<br/><span class="hero__heading--stylishText">Living A Mindful Life</span>
      </h1>
      <h2 class="hero__subheading">A personal development blog about travel, wellness and life hacking that you'll
        love
      </h2>
      <Link to="/" class="btn hero__btn">Subscribe Now</Link>
    </div>
  )
}

export default Header
