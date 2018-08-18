const webpack = require("webpack");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/index.ts",
  output: {
    path: __dirname,
    filename: "./dist/app.js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [],
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
