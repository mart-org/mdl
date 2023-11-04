const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const html = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const mainConfig = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "library.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          miniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new miniCssExtractPlugin({ filename: "index.css" }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/sass/index.css",
          to: "sass",
        },
      ],
    }),
  ],
};

const clientConfig = {
  entry: "./app/main.tsx",
  output: {
    path: path.resolve(__dirname, "client/"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  devServer: {
    open: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          miniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [new html({ filename: "index.html", template: "./app/index.html" })],
};

// Exportamos ambas configuraciones
module.exports = [mainConfig, clientConfig];
