import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import {Link}  from "gatsby"


const LeadPost = props => {
  const { name, slug, summary, thumbnail, createdAt } = props
  const divStyle = {
    placeSelf: "center"
  };

  return (
    <>
    <div className="container">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">


            <div class="row-span-1 col-san">
                <div className="">
                    <Img fluid={thumbnail.localFile.childImageSharp.fluid} alt={name} className="group-hover:opacity-75 transition duration-150 ease-in-out rounded"/>
                </div>
            </div>

            <div class="row-span-1" style={divStyle}>
                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
                    {name}
                </h2>
                <h3 className="text-2xl font-extrabold leading-tight tracking-tight">
                    <span className="text-pink-600">
                        {summary}
                    </span>
                </h3>

                <div class="mt-2">
                    <Link to={`/${slug}`}>
                        <button class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
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
      localFile {
        childImageSharp {
          fluid(maxWidth: 444, maxHeight: 342, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    summary
    createdAt(fromNow: true)
  }
`




