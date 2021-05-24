import React from 'react';
import { Link } from 'gatsby';
import profileImg from '../images/profile.jpg';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from 'react-icons/fa';

const Sidebar = ({ title, description }) => {
  return (
    <aside className="sidebar-section">
      <div className="sidebar">
        <div className="sidebarTop">
          <h5 className="sidebarTop__heading">{title}</h5>
          <img src={profileImg} alt="" className="sidebarTop__img" />
          <p className="sidebarTop__text">{description}</p>
          <ul className="sidebarTop__socialList">
            <li className="sidebarTop__socialList-item">
              <Link to="#">
                <FaFacebookSquare
                  className="sidebarTop__socialList-itemIcon"
                  color="#0674E7"
                  size={'2.8rem'}
                ></FaFacebookSquare>
              </Link>
            </li>
            <li className="sidebarTop__socialList-item">
              <Link to="#">
                <FaTwitterSquare
                  className="sidebarTop__socialList-itemIcon"
                  color="#0077b5"
                  size={'2.8rem'}
                ></FaTwitterSquare>
              </Link>
            </li>
            <li className="sidebarTop__socialList-item">
              <Link to="#">
                <FaYoutubeSquare
                  className="sidebarTop__socialList-itemIcon"
                  color="#FF0000"
                  size={'2.8rem'}
                ></FaYoutubeSquare>
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebarMiddle"></div>
        <div className="sidebarBottom"></div>
      </div>
    </aside>
  );
};

export default Sidebar;
