/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-12-19 18:24:48
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-19 21:21:08
 */
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const IndexPage: React.FC = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p></p>
  </Layout>
)

export default IndexPage
