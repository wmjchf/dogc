/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-12-19 21:39:01
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-19 21:39:02
 */
export type BlogDetail = {
  id: string
  html?: string
  fields: {
    slug: string
  }
  frontmatter: {
    date: string
    description: string
    title: string
  }
}

export type BlogItem = {
  node: BlogDetail
}

export type Blogs = {
  totalCount: string
  edges: BlogItem[]
}
