import React from 'react'
import { Link, graphql } from "gatsby"
import logo from '../images/logo1.png'

const Nav = () => {
  return (
    <nav className="main-nav container">
      <div className="logo">
        <Link href="/"><span className="logo">Mindful <span className="logo-span">Living</span></span></Link>
      </div>
      <ul className="navBar">
        {/* <li className="navBar__item"><Link to="/">Home</Link></li>
        <li className="navBar__item"><Link to="/blog">Blog</Link></li>
        <li className="navBar__item"><Link to="/contact">Get In Touch</Link></li> */}
      </ul>
    </nav>
  )
}

export default Nav
