import React from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const PhotoGalleryCard = props => {
  const { name, slug, coverPhoto} = props

  return (
    <div className="bg-white h-full shadow-md rounded-md overflow-hidden group">
      <Link to={`/photos/${slug}`}>
        <div className="group-hover:opacity-75 transition duration-150 ease-in-out">
          <GatsbyImage
            image={getImage(coverPhoto.gatsbyImageData)}
            alt={name}
          />
        </div>
        <div className="p-4 sm:p-5">
          <h1 className="sm:text-lg text-gray-900 font-semibold">{name}</h1>
        </div>
      </Link>
    </div>
  )
}

PhotoGalleryCard.propTypes = {
  name: PropTypes.string.isRequired,
  coverPhoto: PropTypes.shape({
    localFile: PropTypes.object,
  }),
  createdAt: PropTypes.string.isRequired,
}

export default PhotoGalleryCard

export const query = graphql`
  fragment PhotoGalleryCard on ContentfulPhotoGallery {
    id
    name
    slug
    coverPhoto {
      gatsbyImageData( height: 200, width: 300, layout: FULL_WIDTH)
    }
    createdAt(fromNow: true)
  }
`
