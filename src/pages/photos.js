import { graphql } from "gatsby"
import React from "react"
import Layout from "../layouts/Layout"
// import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"
import PhotoGalleryCollection from "../components/PhotoGalleryCollection"

const PhotoPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata title="Photos" description="Check out some of my favorite photos" />
    
      <div className="bg-gray-100 py-12 lg:py-16">
          {data.photos && data.photos.nodes.length > 0 ?  (
            <PhotoGalleryCollection entries={data.photos.nodes} />
          ) : (
            <div className="container">No projects found.</div>
          )}
      </div>

    </Layout>

  )
}

export default PhotoPage

export const query = graphql`
  query PhotoGalleryQuery {
    photos: allContentfulPhotoGallery (sort: {fields: name}) {
      nodes {
        ...PhotoGalleryCard
      }
    }
  }
`
