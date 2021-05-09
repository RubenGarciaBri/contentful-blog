import React from 'react'
import { Link } from 'gatsby'

const Pager = ({ previous, next }) => {
  // const { previousPagePath, nextPagePath } = pageContext

  return (
    <div>
      {previous && (
        <span><Link to={previous}>Previous</Link></span>
      )}
      {next && (
        <span><Link to={next}>Next</Link></span>
      )}
    </div>
  )
}

export default Pager
