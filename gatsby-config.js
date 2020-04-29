module.exports = {
  siteMetadata: {
    title: `Kotkan kitaraseura ry`,
    description: `Etelä-Kymenlaakson kitaramusiikin edistämiseksi.`,
    author: `@sormmi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'kotkan-kitaraseura',
        defaultLang: 'fi',
        previews: false,
        pages: [{
          type: 'Homepage',
          path: '/',
          match: '/',
          component: require.resolve('./src/templates/homepage.js'),
        },
        {
          type: 'Page',
          path: '/page',
          match: '/:uid', // pages will be generated under this pattern
          component: require.resolve('./src/templates/page.js'),
        },
        {
          type: 'Eventpage',
          path: '/',
          match: '/:uid',
          component: require.resolve('./src/templates/eventpage.js'),
        },
        {
          type: 'Historypage',
          match: '/historia/:uid',
          path: '/',
          component: require.resolve('./src/templates/historypage.js'),
        }],
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`300`, `400`, `700`, `900`],
          }
        ],
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
