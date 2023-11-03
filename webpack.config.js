const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

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
};

const clientConfig = {
  entry: {
    client: "./app/main.tsx",
  },
  output: {
    path: path.resolve(__dirname, "client/"),
    filename: "main.js",
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
    ],
  },
};

// Exportamos ambas configuraciones
module.exports = [mainConfig, clientConfig];
