import React from 'react'
import { Link, graphql } from "gatsby"

const Footer = () => {
  return (
    <footer class="footer-section">
    <div class="footer footer-wrapper container">
      <ul class="footer__list">
        <li class="footer__listItem"><Link to="/">Home</Link></li>
        <li class="footer__listItem"><Link to="/blog">Blog</Link></li>
        <li class="footer__listItem"><Link to="/contact">Get In Touch</Link></li>
      </ul>
      <div class="footer__imgWrapper">
        {/* <a href="#"><img src="img/logo1.png" alt="" class="footer__img"/></a> */}
      </div>
      © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
    </div>
  </footer>
  )
}

export default Footer
