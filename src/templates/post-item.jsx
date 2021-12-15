import { graphql } from "gatsby"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Button from "../components/Button"
import Cards from "../components/Cards"
import Carousel from "../components/Carousel"
import Layout from "../layouts/Layout"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ContentfulRichTech from "../components/ContentfulRichTech"


function shufflePhotoGallery(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export default props => {
  const {
    content,
    gallery,
    name,
    related,
    summary,
    thumbnail,
    url,
    updatedAt,
    createdAt,
    author
  } = props.data.item

  const shuffledGallery = shufflePhotoGallery(gallery);

  return (
    <Layout>
      <SiteMetadata
        title={name}
        description={summary}
        image={thumbnail.file.url}
      />
      <div className="bg-gray-0 py-12 lg:py-16">

        {/* <GatsbyImage
            image={getImage(gallery[0].gatsbyImageData)}
            alt={name}
        /> */}

        
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full lg:pl-8 xl:pl-12">
              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-1">
                {name}
              </h1>

              <h2 className="text-xl leading-tight font-semibold tracking-tight text-pink-600 sm:text-2xl">
                {summary} 
              </h2>

              <p className="text-sm sm:text-base text-gray-500">Written by <b>{author}</b> {createdAt}</p>
              
              <br/>

              <hr/>

              <br/>
              
              <ContentfulRichTech richText = {content} />

              {url && (
                <div className="mt-8">
                  <Button href={url}>More info</Button>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>



      {related && (
        <div className="bg-gray-100 py-12 lg:py-16">
          <div className="container">
            <h2 className="text-3xl sm:text-4xl leading-tight font-extrabold tracking-tight text-gray-900 mb-8">
              You may also like
            </h2>
          </div>
          <Cards items={related} hideLastItemOnMobile={true} />
        </div>
      )}
    </Layout>
  )
}

export const query = graphql`
  query PortfolioItemQUery($slug: String!) {
    item: contentfulPost(slug: { eq: $slug }) {
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 300)
          __typename
          }
        }
      }
      gallery {
        id
        title
        gatsbyImageData(layout: CONSTRAINED)
      }
      name
      related {
        ...PostCard
      }
      summary
      thumbnail {
        id
        description
        gatsbyImageData(layout: CONSTRAINED)
        __typename
        file {
          url
        }
      }
      url
      updatedAt(fromNow: true)
      createdAt(fromNow: true)
      author
      
    }
  }
`
