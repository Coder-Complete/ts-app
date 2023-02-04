const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  // entry: path.resolve(__dirname, "src", "index.js"),
  // entry: "/src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // publicPath: "/",
  },
  devServer: {
    static: path.join(__dirname, "src/"),
    port: 8080,
    open: true,
    hot: true,
    // devMiddleware: {
    //   publicPath: "http://localhost:8080/dist/",
    // },
    // hot: "only",
    // historyApiFallback: true,
  },
  module: {
    rules: [
      {
        // test: /\.[jt]sx?$/,
        test: /\.(js|jsx)$/,
        // use: ["babel-loader"],
        // include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  mode: "development",
};
