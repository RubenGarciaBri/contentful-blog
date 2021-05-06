import React from 'react'
import { Link, graphql } from "gatsby"

const Nav = () => {
  return (
    <nav class="main-nav container">
      <div class="logo">
        {/* <Link href="index.html"><img src="img/logo1.png" alt="logo"/></Link> */}
      </div>
      <ul class="navBar">
        <li class="navBar__item"><Link to="/">Home</Link></li>
        <li class="navBar__item"><Link to="/blog">Blog</Link></li>
        <li class="navBar__item"><Link to="/contact">Get In Touch</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
