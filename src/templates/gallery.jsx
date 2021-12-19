import { graphql } from "gatsby"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Layout from "../layouts/Layout"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


export default props => {
  const {
    name,
    description,
    photos,
  } = props.data.item


  return (
    <Layout>
      <SiteMetadata
        title={name}
        description={description.internal.content}
      />
      <div className="bg-gray-0 py-12 lg:py-16">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full lg:pl-8 xl:pl-12">

              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-3">
                {name}
              </h1>
             <p className="mb-3">{description.internal.content}</p>
             <hr />

             <br />

              <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
              <Masonry columnsCount={3}>
                {photos.map(item => (
                <div key={item.id} className="__masonry_photos">
                  <GatsbyImage
                    image={getImage(item.gatsbyImageData)}
                    alt={item.title}
                    className = "p5"
                  />
                </div>
              ))}
              </Masonry>
              </ResponsiveMasonry>

             
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GalleryItemQUery($slug: String!) {
    item: contentfulPhotoGallery(slug: { eq: $slug }) {
      name
      description {
        internal {
          content
        }
      }
      photos {
        gatsbyImageData(layout: FULL_WIDTH)
        id
        title
      }
    }
  }
`
