/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-12-19 18:24:48
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-19 20:59:46
 */

import * as React from "react"
import "./layout.css"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
