import React from 'react'
import { Link, graphql } from "gatsby"

const CallToAction = ({ title, subtitle, cta }) => {
  return (
    <div className="cta cta-wrapper">
      <h2 className="cta__heading">{title}</h2>
      <p className="cta__text">{subtitle}</p>
      <Link to="#" className="btn cta__btn">{cta}</Link>
    </div>
  )
}

export default CallToAction
