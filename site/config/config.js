/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-11-06 23:36:05
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-11-07 11:19:58
 */
export default {
  title: "react移动端组件库",
  description: `站在风口，猪都会飞`,
  chainWebpack(memo) {
    memo.plugins.delete("copy");
  },
  mode: "site",
  outputPath: "dist",
};
