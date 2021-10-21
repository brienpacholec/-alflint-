import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layouts/Layout"
import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"

const PhotoPage = ({ data }) => (

  <Layout>
    <SiteMetadata title="About" description="Sample description" />

    <div className="bg-gray-100">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Photos
            </h1>
          
           


          </div>
          
        </div>
      </div>
    </div>
  </Layout>
)

export default PhotoPage

export const query = graphql`
  query {
    contentfulAbout {
      headline
      childContentfulAboutContentRichTextNode {
        childContentfulRichText {
          html
        }
      }
    }
  }
`
