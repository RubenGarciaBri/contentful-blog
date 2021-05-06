import React from 'react'
import { Link, graphql } from "gatsby"
import profileImg from '../images/profile.jpg'
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";

const Sidebar = ({ title, description }) => {
  return (
    <aside className="sidebar-section">
      <div className="sidebar">
        <div className="sidebarTop">
          <h5 className="sidebarTop__heading">{title}</h5>
          <img src={profileImg} alt="" className="sidebarTop__img"/>
          <p className="sidebarTop__text">
            {description}
          </p>
          <ul className="sidebarTop__socialList">
            <li className="sidebarTop__socialList-item">
              <Link to="#"><FaFacebookSquare
                  className="fab fa-facebook sidebarTop__socialList-itemIcon sidebarTop__socialList-itemIcon-facebook"></FaFacebookSquare></Link>
            </li>
            <li className="sidebarTop__socialList-item">
              <Link to="#"><FaTwitterSquare
                  className="fab fa-linkedin sidebarTop__socialList-itemIcon sidebarTop__socialList-itemIcon-linkedin"></FaTwitterSquare></Link>
            </li>
            <li className="sidebarTop__socialList-item">
              <Link to="#"><FaYoutubeSquare
                  className="fab fa-youtube sidebarTop__socialList-itemIcon sidebarTop__socialList-itemIcon-youtube"></FaYoutubeSquare></Link>
            </li>
          </ul>
        </div>
        <div className="sidebarMiddle">
        </div>
        <div className="sidebarBottom"></div>
      </div>
    </aside>
  )
}

export default Sidebar
