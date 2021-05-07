import React from 'react'
import { Link, graphql } from "gatsby"
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
    <div className="footer container">
      {/* <div className="footer__imgWrapper">
        <a href="#"><img src="img/logo1.png" alt="" className="footer__img"/></a>
      </div> */}
      <p>Built with <FaHeart size={16} color="red"/> by Ruben Garcia using
        <a href="https://www.gatsbyjs.com" target="_blank">Gatsby </a>
        and
        <a href="https://www.contentful.com" target="_blank">Contentful</a>
        </p>
    </div>
  </footer>
  )
}

export default Footer
