import React from 'react'
import { Link, graphql } from "gatsby"

const Sidebar = () => {
  return (
    <aside className="sidebar-section">
      <div className="sidebar">
        <div className="sidebarTop">
          <h5 className="sidebarTop__heading">About Me</h5>
          {/* <img src="img/profile.jpg" alt="" className="sidebarTop__img"/> */}
          <p className="sidebarTop__text">
            Hi, I'm Marina and I'm a full time writter at FashionNow magazine. I've recently started this blog as a
            personal project to share my thoughts on travel, fitness, fashion and lifetime in general.
          </p>
          <ul className="sidebarTop__socialList">
            <li className="sidebarTop__socialList-item">
              <Link to="#"><i
                  className="fab fa-facebook sidebarTop__socialList-itemIcon sidebarTop__socialList-itemIcon-facebook"></i></Link>
            </li>
            <li className="sidebarTop__socialList-item">
              <Link to="#"><i
                  className="fab fa-linkedin sidebarTop__socialList-itemIcon sidebarTop__socialList-itemIcon-linkedin"></i></Link>
            </li>
            <li className="sidebarTop__socialList-item">
              <Link to="#"><i
                  className="fab fa-youtube sidebarTop__socialList-itemIcon sidebarTop__socialList-itemIcon-youtube"></i></Link>
            </li>
          </ul>
        </div>
        <div className="sidebarMiddle">
          <h5 className="sidebarMiddle__heading">Popular Posts</h5>
          <div className="sidebarMiddle__postWrapper sidebarMiddle__postWrapper--1">
            <div className="sidebarMiddle__postWrapper-left">
              <h6 className="sidebarMiddle__postCategory">Money</h6>
              <h6 className="sidebarMiddle__postTitle"><Link to="#">How to lose 6 pounds a month consistently</Link></h6>
            </div>
            <div className="sidebarMiddle__postWrapper-right">
              {/* <img src="img/gym.jpg" alt="" className="sidebarMiddle__postWrapper-img"/> */}
            </div>
          </div>
          <div className="sidebarMiddle__postWrapper sidebarMiddle__postWrapper--2">
            <div className="sidebarMiddle__postWrapper-left">
              <h6 className="sidebarMiddle__postCategory">Mindset</h6>
              <h6 className="sidebarMiddle__postTitle"><a href="#">Morning affirmations to improve your mindset</a></h6>
            </div>
            <div className="sidebarMiddle__postWrapper-right">
              {/* <img src="img/meditation.jpg" alt="" className="sidebarMiddle__postWrapper-img"/> */}
            </div>
          </div>
        </div>
        <div className="sidebarBottom"></div>
      </div>
    </aside>
  )
}

export default Sidebar
