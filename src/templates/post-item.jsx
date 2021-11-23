import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Button from "../components/Button"
import Cards from "../components/Cards"
import Carousel from "../components/Carousel"
import Newsletter from "../components/Newsletter"
import Layout from "../layouts/Layout"

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
    gallery,
    name,
    related,
    summary,
    thumbnail,
    url,
    updatedAt,
    createdAt,
    author,
    childContentfulPostContentRichTextNode,

  } = props.data.item

  const shuffledGallery = shufflePhotoGallery(gallery);

  return (
    <Layout>
      <SiteMetadata
        title={name}
        description={summary}
        image={thumbnail.localFile.publicURL}
      />
      <div className="bg-gray-0 py-12 lg:py-16">
          

        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full">
              {shuffledGallery && shuffledGallery.length > 1 && <Carousel images={shuffledGallery} />}  
            </div>
          </div>
        </div>
        

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
              
              <div className="my-4 text-base text-gray-700 whitespace-pre-line __richtext_content" dangerouslySetInnerHTML = {{__html: childContentfulPostContentRichTextNode.childContentfulRichText.html}}>
              </div>

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
      <Newsletter />
    </Layout>
  )
}

export const query = graphql`
  query PortfolioItemQUery($slug: String!) {
    item: contentfulPost(slug: { eq: $slug }) {
      childContentfulPostContentRichTextNode {
        childContentfulRichText {
          html
          timeToRead
        }
      }
      gallery {
        id
        localFile {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed_withWebp
            }
            fluid(maxWidth: 3080, maxHeight: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        title
      }
      name
      related {
        ...PostCard
      }
      summary
      thumbnail {
        localFile {
          publicURL
        }
      }
      url
      updatedAt(fromNow: true)
      createdAt(fromNow: true)
      author
      
    }
  }
`
