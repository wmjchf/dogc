/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-11-06 10:13:49
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-11-06 13:14:54
 */
module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "import",
      {
        libraryName: "@bufang/dogc",
        libraryDirectory: "es", // default: lib
        camel2DashComponentName: true,
        style: name => {
          console.log("style-->>", name);
          // v-easyui123/lib/switch/index.js
          // 注意这里的name为组件所在的路径，按需加载样式配置提取对应组件名称的css即可
          return `${name}/style/index.less`;
        },
      },
    ],
  ],
};
