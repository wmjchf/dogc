/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-11-06 10:13:49
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-11 12:45:47
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash:8].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
    alias: {
      "@": resolve("src"), // 这样配置后 @ 可以指向 src 目录
    },
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
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: {},
              },
            },
          },
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node-modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png)$/,
        exclude: /node-modules/,
        loader: "file-loader",
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
