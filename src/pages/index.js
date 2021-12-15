import { graphql } from "gatsby"
import React from "react"
import Cards from "../components/Cards"
// import Hero from "../components/Hero"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import LeadPost from "../components/LeadPost"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata title="Home" description="Adventures of Al Flint" />

      {/* <Hero /> */}

      <LeadPost {...data.post.nodes[0]} />

      {data.post && data.post.nodes.slice(1).length > 0 ? (
          <div className="bg-gray-100 py-12 lg:py-16">
            <Cards items={data.post.nodes} />
          </div>
        ) : (
          <div></div>
      )}


    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    post: allContentfulPost(sort: {fields: createdAt, order: DESC}) {
      nodes {
        ...PostCard
      }
    }
  }
`
