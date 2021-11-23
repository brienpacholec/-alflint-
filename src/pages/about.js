import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layouts/Layout"
import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata title="About" description="Learn more about me!" />
      

      <div className="bg-gray-100">
        <div className="container py-12 lg:pb-16">
          <div className="flex flex-wrap">
            <div className="w-full ">
              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                About me 
              </h1>

              <h2 className="text-xl leading-tight font-semibold tracking-tight sm:text-2xl">
                {data.contentfulAbout.headline}
              </h2>
              <div className="mt-4 leading-loose __richtext_content" dangerouslySetInnerHTML = {{__html: data.contentfulAbout.childContentfulAboutContentRichTextNode.childContentfulRichText.html}}>
              </div>


            </div>
            
          </div>
        </div>
      </div>
      <Newsletter />
    </Layout>
  )
}

export default AboutPage

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
