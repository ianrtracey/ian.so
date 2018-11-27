import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import "../styles/main.scss";
export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            nav {
              text
              url
            }
          }
        }
      }
    `}
    render={data => (
      <nav className="mb5">
        <h1 className="f2 sans-serif mb0">{data.site.siteMetadata.title}</h1>
        <div className="san-serif">
          {data.site.siteMetadata.nav.map(item => (
            <Link
              key={item.url}
              to={item.url}
              className=" sans-serif link dim black-7 dib mr4"
              activeClassName="sans-serif link light-gray dib"
            >
              <p>{item.text.toUpperCase()}</p>
            </Link>
          ))}
        </div>
      </nav>
    )}
  />
);
