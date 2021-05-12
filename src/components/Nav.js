import React from 'react'
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav className="main-nav container">
      <div className="logo">
        <Link href="/"><span className="logo">Mindful <span className="logo-span">Living</span></span></Link>
      </div>
      <ul className="navBar">
      </ul>
    </nav>
  )
}

export default Nav
