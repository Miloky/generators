const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const WebpackBar = require("webpackbar");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//TODO: ask question
//1. about async
//2. about typescript
//3. about scss
//4. about mode

module.exports = {
  entry: {
    "babel-polyfill": "babel-polyfill",
    index: "./src/scripts/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader?sourceMap" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader?sourceMap" // compiles Sass to CSS, using Node Sass by default
          },
          {
            loader: "postcss-loader?sourceMap",
            options: {
              sourceMap: "source-map"
            }
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new WebpackBar(),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      inject: true
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 9000,
    hot: true,
    open: true
  },
  devtool: "source-map",
  mode: "development"
  //   mode: 'production'
};
