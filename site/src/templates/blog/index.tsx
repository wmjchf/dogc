/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-12-19 21:35:01
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-19 21:41:23
 */
import * as React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import type { BlogDetail } from "../../types/blog"
import { PageProps, graphql } from "gatsby"

type DataProps = {
  markdownRemark: BlogDetail
}

const Blog: React.FC<PageProps<DataProps>> = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Seo title="post" />
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <p>{post.frontmatter.description}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      fields {
        slug
      }
      frontmatter {
        date(formatString: "YYYY-MM-DD", locale: "zh-CN")
        description
        title
      }
    }
  }
`
