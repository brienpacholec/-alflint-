import { graphql } from "gatsby"
import React from "react"
import Layout from "../layouts/Layout"
import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"
import AboutMe from "../components/AboutMe"


const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata title="About" description="Learn more about me!" />

            
        <div className="bg-gray-100 py-12 lg:py-16">
            {data.contentfulAbout.headline.length > 0 ?  (
              <AboutMe data={data} />
            ) : (
              <div className="container">No content found.</div>
            )}
        </div>
        
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    contentfulAbout {
    headline
    content {
      raw
      references {
        ... on ContentfulAsset {
          contentful_id
        	title
          description
          gatsbyImageData(width: 500)
         __typename
        }
      }
    }
  }
  }
`
