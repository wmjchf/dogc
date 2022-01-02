/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-12-19 18:24:48
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-01-02 22:02:21
 */
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Box } from "@material-ui/core"
import "./index.less"

const IndexPage: React.FC = () => (
  <div className="home">
    <div className="home_descript">
      <h2>M78星云 —— 一个理想的国度</h2>
      <span>既然改变不了这个世界，那就改变自己。</span>
      <div
        className="image_container"
        onClick={() => window.open("https://github.com/wmjchf")}
      >
        <StaticImage src="../images/avatar.jpeg" alt="github"></StaticImage>
        <span>
          <StaticImage src="../images/look.png" alt="github"></StaticImage>
        </span>
      </div>
    </div>
    <div className="home_navigation">
      <span>
        <i>史蒂夫乔布斯</i>
        是苹果公司的前首席运营官和创始人之一，也是皮克斯动画公司(皮克斯于2006年被迪士尼收购)的前董事长兼首席执行官。
      </span>
      <span>
        本人性格开朗，喜欢游泳，篮球，羽毛球等诸多体育运动。热爱阅读，钟爱历史。尤其喜欢中国古诗词的阅读，喜欢音乐，经常听一些钢琴，古筝，葫芦丝曲子陶冶情操
      </span>
    </div>
  </div>
)

export default IndexPage
