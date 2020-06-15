const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    home: "./src/index.js",
    sketches: "./src/sketches.js",
    apropos: "./src/apropos.js",
    details: "./src/components/single-post/single-post.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    index: "index.html",
    port: 9000,
    open: true,
    writeToDisk: true,
  },
  module: {
    rules: [
      {
        test: /\.(ico|jpg|jpeg|png|gif|webp|svg|ttf)(\?.*)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "media/img",
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["stage-0"],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
      {
        test: /\.(otf|ttf|eot|woff| woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "media/fonts",
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["home"],
      title: "Home",
      description: "Home",
      template: "src/view-templates/page-template.hbs",
    }),
    new HtmlWebpackPlugin({
      filename: "sketches.html",
      chunks: ["sketches"],
      title: "Sketches",
      description: "Sketches",
      template: "src/view-templates/page-sketches.hbs",
    }),
    new HtmlWebpackPlugin({
      filename: "apropos.html",
      chunks: ["apropos"],
      title: "À Propos",
      description: "Page avec le resumé du projet",
      template: "src/view-templates/page-template.hbs",
    }),
    new HtmlWebpackPlugin({
      filename: "details.html",
      chunks: ["details"],
      title: "Details",
      description: "Détails du post",
      template: "src/view-templates/page-single-post.hbs",
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["dist"],
    }),
  ],
};
