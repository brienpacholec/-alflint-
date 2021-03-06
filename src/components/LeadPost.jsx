import { graphql } from 'gatsby'
// import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {Link}  from "gatsby"


const LeadPost = props => {
  const { name, slug, summary, thumbnail, createdAt } = props
  const divStyle = {
    placeSelf: "center"
  };


  return (
    <>
    <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="row-span-1 col-san">
                <div className="">
                      <GatsbyImage
                        image={getImage(thumbnail.gatsbyImageData)}
                        alt={name}
                      />
                </div>
            </div>

            <div className="row-span-1" style={divStyle}>
                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
                    {name}
                </h2>
                <h3 className="text-2xl font-extrabold leading-tight tracking-tight">
                    <span className="text-pink-600">
                        {summary}
                    </span>
                </h3>

                <div className="mt-2">
                    <Link to={`/${slug}`}>
                        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
                            See more 
                        </button>
                    </Link>

                    <p className="text-sm sm:text-base text-gray-500">Posted {createdAt}</p>
                </div>
            </div>
        </div>
    </div>

    <br/>

    </>
  )
}

LeadPost.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    localFile: PropTypes.object,
  }),
  createdAt: PropTypes.string.isRequired,
}

export default LeadPost

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




