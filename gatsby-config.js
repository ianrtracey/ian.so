module.exports = {
  siteMetadata: {
    title: 'Ian Tracey',
    nav: [
      {
        text: 'About',
        url: '/about'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: "content"
      }
    }
  ],
}