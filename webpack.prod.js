const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const nodeExternals = require("webpack-node-externals")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// const { StatsWriterPlugin } = require("webpack-stats-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const HTMLWebPackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

const clientConfig = {
  target: "web",
  mode: "production",
  entry: "./client/src/index.tsx",
  output: {
    path: path.join(__dirname, "dist", "client"),
    filename: "bundle.[contenthash].js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
    new HTMLWebPackPlugin({
      template: "./client/public/index.html",
    }),
    new CompressionPlugin(),
    new OptimizeCssAssetsPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "client", "public", "favicon.ico"),
          to: path.resolve(__dirname, "dist", "client"),
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    extensions: [
      ".js",
      ".json",
      ".jsx",
      ".css",
      ".scss",
      ".tsx",
      ".ts",
      ".svg",
    ],
  },
  module: {
    rules: [
      { test: /\.(png|jpg|jpeg|gif|svg)$/, use: ["file-loader"] },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(c|sc|sa)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/dist/client/",
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
}

const serverConfig = {
  target: "node",
  mode: "production",
  entry: "./server/index.ts",
  externals: [nodeExternals()],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  output: {
    path: path.join(__dirname, "dist", "server"),
    filename: "server.js",
  },
  plugins: [new CleanWebpackPlugin(), new CompressionPlugin()],
  resolve: {
    extensions: [".js", ".json", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
}

module.exports = [clientConfig, serverConfig]
