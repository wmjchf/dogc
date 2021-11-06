/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-11-06 10:13:49
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-11-06 18:56:18
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash:8].js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html", // 源模板文件
      filename: "./index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(less)$/,

        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node-modules/,
        loader: "babel-loader",
      },
    ],
  },
  devServer: {
    static: "./dist",
    compress: true,
    port: 8001,
    historyApiFallback: true,
  },
};
