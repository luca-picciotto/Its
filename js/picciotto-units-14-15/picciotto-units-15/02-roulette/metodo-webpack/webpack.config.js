const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js", // Punto di ingresso
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", // Nome del file bundle
  },
  mode: "development", // Cambia a 'production' per la build finale
  module: {
    rules: [
      {
        test: /\.js$/, // Per i file JavaScript
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // Per i file CSS
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Template HTML
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
  devServer: {
    static: "./dist",
    open: true,
    hot: true,
  },
};
