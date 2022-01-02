/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-12-25 23:20:26
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-01-02 18:56:48
 */
import React from "react"
import { Link } from "gatsby"
import { Box } from "@material-ui/core"
import Seo from "../../Seo"
import "./index.less"

interface IBasicLayout {
  name: string
}

export const BasicLayout: React.FC<IBasicLayout> = props => {
  return (
    <Box component={"div"} className="bufang_basic_layout">
      <Seo title="DOGC" />
      <Box component={"div"} className="basic_layout">
        <Link to="/home">首页</Link>
        <Link to="/blog">博客</Link>
        <Link to="/dogc">DOGC</Link>
      </Box>
      <Box component={"div"}>{props.children}</Box>
    </Box>
  )
}
