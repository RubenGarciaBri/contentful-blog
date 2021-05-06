import React from 'react'
import { Link, graphql } from "gatsby"

const CallToAction = () => {
  return (
    <div className="cta cta-wrapper">
      <h2 className="cta__heading">Main Benefit</h2>
      <p className="cta__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima totam hic ab quibusdam
        reiciendis eligendi iure neque beatae deleniti.</p>
      <Link to="#" className="btn cta__btn">Subscribe Now</Link>
    </div>
  )
}

export default CallToAction
