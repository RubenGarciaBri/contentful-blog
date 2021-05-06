import React from 'react'
import { Link, graphql } from "gatsby"

const Footer = () => {
  return (
    <footer className="footer-section">
    <div className="footer footer-wrapper container">
      <ul className="footer__list">
        <li className="footer__listItem"><Link to="/">Home</Link></li>
        <li className="footer__listItem"><Link to="/blog">Blog</Link></li>
        <li className="footer__listItem"><Link to="/contact">Get In Touch</Link></li>
      </ul>
      <div className="footer__imgWrapper">
        {/* <a href="#"><img src="img/logo1.png" alt="" className="footer__img"/></a> */}
      </div>
      © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
    </div>
  </footer>
  )
}

export default Footer
