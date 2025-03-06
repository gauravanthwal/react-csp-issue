const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const crypto = require("crypto");

// Generate a random nonce for each build
const nonce = crypto.randomBytes(16).toString("base64");


const cspPolicy = {
  "default-src": ["'self'"],
  "script-src": ["'self'", `'nonce-${nonce}'`],
  "style-src": ["'self'", `'nonce-${nonce}'`,
    // "'sha256-AbpHGcgLb+kRsJGnwFEktk7uzpZOCcBY74+YBdrKVGs='",
    // "'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU='",
    // "'sha256-6y7WJjf5UmqTyodR6qZk7zX4EDmiF+mg2XwcPgt7NsQ='",
    // "'sha256-TNucpMncdBIdGN21J1AQ41FTrENVPgFQGmIwT1anmDU='",
    // "'sha256-PpoL88sugL+MixGj6eFNM05Q0l/B2tpC9guyJrsQkSY='",
    // "'sha256-3o6aGi9efyCkMyrM2+XnTSuD7E2AcZqZHx/vJIcMTEk='"
  ],
  "font-src": ["'self'"],
  "img-src": ["'self'"],
  "connect-src": ["'self'"],
  "frame-src": ["'none'"],
};

const cspMetaTag = Object.entries(cspPolicy)
  .map(([key, value]) => `${key} ${value.join(" ")}`) 
  .join("; ");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: process.env.NODE_ENV === "production" ? "source-map" : "cheap-module-source-map", // No eval() in dev mode
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      templateParameters: {nonce},
      meta: {
        "Content-Security-Policy": { "http-equiv": "Content-Security-Policy", content: cspMetaTag },
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000,
    open: true,
    hot: false, // Hot reloading injects inline scripts, so disabled for strict CSP
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
