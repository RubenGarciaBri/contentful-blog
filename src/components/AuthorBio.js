import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import profilePicture from '../images/profile-rounded.jpg';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from 'react-icons/fa';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;

  return (
    <div className="bio">
      <StaticImage />
      <div className="bio__left">
        <img
          className="bio__left-avatar"
          src={profilePicture}
          alt="Profile picture"
        />
      </div>
      {author?.name && (
        <div className="bio__right">
          <p className="bio__right-summary">
            Written by <strong>{author.name}</strong> {author?.summary || null}
            {` `}
          </p>
          <ul className="bio__right-list">
            <li className="bio__right-list__item">
              <Link to="#">
                <FaFacebookSquare
                  className="bio__right-list__item-icon"
                  color="#0674E7"
                  size={'2.6rem'}
                ></FaFacebookSquare>
              </Link>
            </li>
            <li className="bio__right-list__item">
              <Link to="#">
                <FaTwitterSquare
                  className="bio__right-list__item-icon"
                  color="#0077b5"
                  size={'2.6rem'}
                ></FaTwitterSquare>
              </Link>
            </li>
            <li className="bio__right-list__item">
              <Link to="#">
                <FaYoutubeSquare
                  className="bio__right-list__item-icon"
                  color="#FF0000"
                  size={'2.6rem'}
                ></FaYoutubeSquare>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Bio;
