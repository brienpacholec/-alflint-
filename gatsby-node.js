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
    type ContentfulPost implements Node {
      thumbnail: ContentfulAsset @link(by: "id", from: "thumbnail___NODE")
    }
    type ContentfulPost implements Node {
      gallery: [ContentfulAsset] @link(by: "id", from: "gallery___NODE")
    }
    
  `
  createTypes(typeDefs)
}



exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const pageTemplates = {
    Post: path.resolve("./src/templates/post-item.jsx"),
    Gallery: path.resolve("./src/templates/gallery.jsx"),
  }

  const posts = graphql(`
    {
      post: allContentfulPost {
        nodes {
          slug
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors);
    }

   

    if (result.data && result.data.post) {
        result.data.post.nodes.map(({ slug }) => {
          createPage({
            path: `/${slug}`,
            component: pageTemplates.Post,
            context: { slug },
          })
        })
      }
  });


  const galleries = graphql(`
    {
      gallery: allContentfulPhotoGallery {
        nodes {
          slug
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors);
    }

   

    if (result.data && result.data.gallery) {
        result.data.gallery.nodes.map(({ slug }) => {
          createPage({
            path: `/photos/${slug}`,
            component: pageTemplates.Gallery,
            context: { slug },
          })
        })
      }
  });

  // Return a Promise which would wait for both the queries to resolve
	return Promise.all([posts, galleries]);


}
