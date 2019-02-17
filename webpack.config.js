const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/index.ts",
  output: {
    path: __dirname + "/dist",
    filename: "app.js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [new CopyWebpackPlugin([{ from: "static", to: "." }])],
  devServer: {},
  module: {
    rules: [
      {
        loader: "ts-loader",
        test: /\.tsx?$/
      }
    ]
  },
  devtool: "source-map"
};
