import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import "../styles/main.scss"
// export default () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             nav {
//               text
//               url
//             }
//           }
//         }
//       }
//   `}
//     render={data => (
//       <nav classNameName="pa3 pa4-ns">
//         <a classNameName="link dim black b f3 f2-ns dib mr3" href="#" title="Home">
//           {data.site.siteMetadata.title}
//         </a>
//         {data.site.siteMetadata.nav.map((item) => (
//           <Link 
//             classNameName={'link dim gray f5 f3-ns dib mr3'}
//             to={item.url}
//           >{item.text}</Link>
//         ))}
//       </nav>
//     )}
//   />
// )
export default () => (
  <div className="mw9 center pa4 pt5-ns ph7-l mb4">
    <h1 className="f1 black-7 sans-serif">Ian Tracey</h1>
    <div className="san-serif db dtc-1 mr3 w-100 v-mid w-75-l tr-1">
      <a className="link dim dark-gray f4 f3-l dib mr3 mr3-l">About</a>
      <a className="link dim dark-gray f4 f3-l dib mr3 mr3-l">Thoughts</a>
      <a className="link dim dark-gray f4 f3-l dib mr3 mr3-l">Talks</a>
    </div>
  </div>
)

