import React from 'react'
import { Link, graphql } from "gatsby"

const Nav = () => {
  return (
    <nav className="main-nav container">
      <div className="logo">
        {/* <Link href="index.html"><img src="img/logo1.png" alt="logo"/></Link> */}
      </div>
      <ul className="navBar">
        <li className="navBar__item"><Link to="/">Home</Link></li>
        <li className="navBar__item"><Link to="/blog">Blog</Link></li>
        <li className="navBar__item"><Link to="/contact">Get In Touch</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
