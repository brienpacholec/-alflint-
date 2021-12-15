import Img from "gatsby-image"
// import { graphql, Link } from "gatsby"
import { graphql} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const PhotoGalleryCard = props => {
  const { name, coverPhoto} = props

  return (
    <div className="bg-white h-full shadow-sm rounded-md overflow-hidden group">
        <div className="group-hover:opacity-75 transition duration-150 ease-in-out">
          <Img fluid={coverPhoto.localFile.childImageSharp.fluid} alt={name} />
        </div>
        <div className="p-4 sm:p-5">
          <h1 className="sm:text-lg text-gray-900 font-semibold">{name}</h1>
        </div>
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
    coverPhoto {
      localFile {
        childImageSharp {
          fluid(maxWidth: 444, maxHeight: 342, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    createdAt(fromNow: true)
  }
`
