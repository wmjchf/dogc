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
  },
};
