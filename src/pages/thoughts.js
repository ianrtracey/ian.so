import React from "react"
import Layout from "../layouts/index";
import { Link } from "gatsby";

export default () => (
    <Layout>
        <h2 className="f1 black-7 lh-copy sans-serif">Thoughts</h2>
        <div>
            <Link className="link dim dark-gray" to="/thoughts/engineering-empathy">
            <p className="mb2 f3 f2-ns f1-m f-title-l">Engineering Empathy</p>
            <time className="pl1 f6 mt0 pt0 dib ttu tracked">
                <small>July 1st, 2018</small>
            </time>
            </Link>
        </div>
         <div>
            <p className="mb2 f3 f2-ns f1-m f-title-l lh-title black-7">I Lied to San Francisco about being a Designer and You Should Too</p>
            <time className="pl1 f6 mt0 pt0 dib ttu tracked">
                <small>June 12th, 2018</small>
            </time>
        </div>
    </Layout>
)