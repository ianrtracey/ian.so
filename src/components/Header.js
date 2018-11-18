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
      <div className="mw9 center pa4 pt5-ns ph7-l mb4">
        <h1 className="f2 black-7 lh-copy sans-serif">
          {data.site.siteMetadata.title}
        </h1>
        <div className="san-serif db dtc-1 mr3 w-100 v-mid w-75-l tr-1">
          {data.site.siteMetadata.nav.map(item => (
            <Link
              to={item.url}
              className="sans-serif link dim dark-gray f5 f3-l dib mr3 mr4-l"
              activeClassName="sans-serif link dim dark-gray f5 f3-l dib mr3 mr4-l"
            >
              <p>{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    )}
  />
);
