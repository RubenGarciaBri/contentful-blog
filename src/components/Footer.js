import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer container">
        <p>
          Built with <FaHeart size={16} color="red" /> by Ruben Garcia using
          <a href="https://www.gatsbyjs.com" target="_blank">
            Gatsby{' '}
          </a>
          and
          <a href="https://www.contentful.com" target="_blank">
            Contentful
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
