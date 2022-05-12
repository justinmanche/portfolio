module.exports = {
  siteMetadata: {
    title: `portfolio`,
    siteUrl: `https://www.justinmanche.com`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/logo.svg',
      },
    },
  ]
}
