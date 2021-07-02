module.exports = {
  siteMetadata: {
    title: `WebDev Portfolio`,
    description: `Awesome WebDev Portfolio built with Gatsby and Strapi`,
		titleTemplate: `%s | WebDev Portfolio`,
		author: `@gatsbyjs`,
		siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    url: `https://systemadigital.ru`,
    twitterUsername: `@john_smilga`,
    image: `/mainImg.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
