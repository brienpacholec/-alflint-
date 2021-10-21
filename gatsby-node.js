const path = require(`path`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type contentfulPostDescriptionTextNode implements Node {
      description: String
    }
    type ContentfulPost implements Node {
      description: contentfulPostDescriptionTextNode
      gallery: [ContentfulAsset]
      id: ID!
      name: String!
      related: [ContentfulPost]
      slug: String!
      summary: String!
      thumbnail: ContentfulAsset
      url: String
    }
  `
  createTypes(typeDefs)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        post: allContentfulPost {
          nodes {
            slug
          }
        }
      }
    `).then(({ errors, data }) => {
      if (errors) {
        reject(errors)
      }

      if (data && data.post) {
        const component = path.resolve("./src/templates/post-item.jsx")
        data.post.nodes.map(({ slug }) => {
          createPage({
            path: `/${slug}`,
            component,
            context: { slug },
          })
        })
      }

      resolve()
    })
  })
}
