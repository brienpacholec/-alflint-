import React from "react"
import ContentfulRichTech from "./ContentfulRichTech"

const AboutMe = ({ data, hideLastItemOnMobile = false }) => {
  return (
    <>
      <div className="container ">
        
          <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              About me 
          </h1>
          
          <h2 className="text-xl leading-tight font-semibold tracking-tight sm:text-2xl">
              {data.contentfulAbout.headline}
          </h2>

          <hr/>
          <br/>

          <ContentfulRichTech richText = {data.contentfulAbout.content} />

      </div>

    </>
  )
}

export default AboutMe