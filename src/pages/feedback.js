import { graphql } from "gatsby"
import React from "react"
import Layout from "../layouts/Layout"
import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"
import PhotoGalleryCollection from "../components/PhotoGalleryCollection"






const FeedbackPage = ({ data }) => {
  return (
    
    <Layout>
      <SiteMetadata title="Feedback" description="Feel free to leave me any feedback." />
        <div className="bg-gray-100">
        <div className="container py-12 lg:pb-16">
          <div className="flex flex-wrap">
            <div className="w-full">
              <h1 className="text-3xl text-center leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Let me know what you're up to!
              </h1>

              <br/>

             
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfbW1t939GMB5lQUbTVDjYxD4UA8RuTrPZbk06hyS61j2Q5ow/viewform?embedded=true&widget=false&headers=false" width="100%" height="500px" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
              

            </div>
            
          </div>
        </div>
      </div>

    </Layout>

  )
}

export default FeedbackPage


