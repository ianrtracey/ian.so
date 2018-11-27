import React from "react";
import Layout from "./";
import PostImage from "../components/PostImage";
import SignupForm from "../components/SignupForm";
import Footer from "../components/Footer";
import { graphql } from "gatsby";
import Img from "gatsby-image";

function BlogPost(props) {
  const post = props.data.markdownRemark;
  const { title, date } = post.frontmatter;
  console.log(JSON.stringify(props.data));
  return (
    <Layout>
      <article>
        <header className="sans-serif mb5">
          <h3 className="f1 f1-m black-7 lh-title mv0">{title}</h3>
          <time className="f6 mb4 dib ttu tracked">
            <small>{date}</small>
          </time>
          <div className="sharethis-inline-share-buttons" />
          <Img fluid={props.data.headerImage.childImageSharp.fluid} />
        </header>
        <div className="georgia">
          <div
            className="f4 f3-ns lh-copy measure georgia"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </article>
    </Layout>
  );
}

export default BlogPost;
export const query = graphql`
  query PostQuery($slug: String!, $headerImagePath: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date
      }
    }
    headerImage: file(relativePath: { eq: $headerImagePath }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
