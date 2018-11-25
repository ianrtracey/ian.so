const path = require("path")
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`)
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/layouts/blogPost.js`)
    return new Promise((resolve, reject) => {
        resolve(graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
              fields{
                  slug
              }
            frontmatter {
              type
            }
          }
        }
      }
    }
  `).then(result => {
                if (result.errors) {
                    console.log(result.errors)
                    return reject(result.errors)
                }
                result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                    if (isBlogPost(node)) {
                        createBlogPost(node, createPage);
                    }
                  
                })
                return
            })
        )
    })
}

const isBlogPost = (node) => {
    const slug = node.fields.slug
    return node.frontmatter.type === 'post'
}

const createBlogPost = (node, createPage) => {
    console.log(`creating blog post ${node.fields.slug}`);
    const blogTemplate = path.resolve('./src/layouts/blogPost.js');
    createPage({
        path: node.fields.slug,
        component: blogTemplate,
        context: {
        slug: node.fields.slug,
        }, // additional data can be passed via context
    })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}
