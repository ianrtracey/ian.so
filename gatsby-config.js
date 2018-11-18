module.exports = {
  siteMetadata: {
    title: "Ian Tracey",
    nav: [
      {
        text: "About",
        url: "/about"
      },
      {
        text: "Thoughts",
        url: "/thoughts"
      },
      {
        text: "Talks",
        url: "/talks "
      },
      {
        text: "Contact",
        url: "/contact "
      }
    ]
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content`,
        name: "content"
      }
    }
  ]
};
