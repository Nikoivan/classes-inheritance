const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  /*entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "result.js",
  },*/
  module: {
    rules: [
      /*{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },*/
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./result.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./src/style.css",
      chunkFilename: "result.css",
    }),
  ],
};
