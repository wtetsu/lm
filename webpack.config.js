const webpack = require("webpack");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: __dirname,
    filename: "./dist/app.js"
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
  ],  
  devServer: {
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  devtool: "source-map"
};
