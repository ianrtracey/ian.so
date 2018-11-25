import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export default ({ data }) => (
 <Img fluid={data.headerImage.childImageSharp.fluid} />
) 

export const query = graphql`
  query {
      headerImage: file(relativePath: { eq: "i-lied.jpeg"}) {
          childImageSharp {
              fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid
              }
          }
      }
  }
`