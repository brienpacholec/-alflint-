require("dotenv").config()

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env
const { BLOCKS, MARKS, INLINES } = require('@contentful/rich-text-types')

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

module.exports = {
  siteMetadata: {
    menu: [
      { name: "Home", to: "/" },
      { name: "About", to: "/about/" }
    ],
    links: {
      facebook: "https://www.facebook.com/alexandrea.flint",
      instagram: "https://www.instagram.com/alexandreaflint/",
      pinterest: "https://www.pinterest.com/aflint4865/",
      twitter: "https://twitter.com/AlexandreaFlint",
      mercari: "https://mercari.com/u/755460107/",
    },
    locale: "en",
    title: `Al Flint`,
    description: "Al Flint's Adventures",
    author: `@alflint`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alexandrea Flint`,
        short_name: `Al Flint`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3182ce`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: '@contentful/gatsby-transformer-contentful-richtext',
      options: {
        renderOptions: {
       
          renderNode: {
            [INLINES.ASSET_HYPERLINK]: node => {
              return `<img  src="${
                node.data.target.fields.file['en-US'].url
              }"/>`
            },
            [INLINES.EMBEDDED_ENTRY]: node => {
              return `<div/>${
                node.data.target.fields.name['en-US']
              }</div>`
            },
          },
          renderMark: {
            [MARKS.BOLD]: text => `<b>${text}</b>`,
            [MARKS.ITALIC]: text => `<i>${text}</i>`,
            [MARKS.UNDERLINE]: text => `<u>${text}</u>`,
          },
        },
      },
    },
  ],
}
