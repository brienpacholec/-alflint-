

import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Card = props => {
  const { name, slug, summary, thumbnail, createdAt } = props

  return (
    <div className="bg-white h-full shadow-sm rounded-md overflow-hidden group">
      <Link to={`/${slug}`}>
        <div className="group-hover:opacity-75 transition duration-150 ease-in-out">
          <GatsbyImage
            image={getImage(thumbnail.gatsbyImageData)}
            alt={name}
          />
        </div>
        <div className="p-4 sm:p-5">
          <h1 className="sm:text-lg text-gray-900 font-semibold">{name}</h1>
          <p className="text-sm sm:text-base text-gray-700">{summary}</p>
          <p className="text-sm sm:text-base text-gray-500">Posted {createdAt}</p>
        </div>
      </Link>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    localFile: PropTypes.object,
  }),
  createdAt: PropTypes.string.isRequired,
}

export default Card

export const query = graphql`
  fragment PostCard on ContentfulPost {
    id
    name
    slug
    thumbnail {
      id
      description
      gatsbyImageData(layout: CONSTRAINED)
      __typename
      file {
        url
      }
    }
    summary
    createdAt(fromNow: true)
  }
`
