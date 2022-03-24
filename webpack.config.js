const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const buildEnv = env?.target || "dev";

  const buildMode = {
    dev: "development",
    prod: "production",
  };

  const srcMap = {
    dev: "eval-source-map",
    prod: "source-map",
  };

  const config = {
    mode: buildMode[buildEnv],
    devtool: srcMap[buildEnv],
    stats: "minimal",
    context: path.resolve(process.cwd()),
    target: "web",
    entry: {
      src: "src/index.jsx",
    },
    output: {
      // I need to do some more reading on output settings
      // https://webpack.js.org/configuration/output/
      charset: true,
      path: path.join(process.cwd(), "/dist"),
      filename: "[name].bundle.js",
      publicPath: "./",
    },
    resolve: {
      extensions: [".js", ".jsx"],
      modules: [process.cwd(), path.join(process.cwd(), "src"), "node_modules"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
            sourceMaps: true,
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: "public",
              },
            },
            // Creates `style` nodes from JS strings
            // "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.(css)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: "public",
              },
            },
            // Creates `style` nodes from JS strings
            "style-loader",
            "css-loader",
          ],
        },
      ],
    },
    devServer: {
      allowedHosts: ["all"],
      bonjour: false,
      client: {
        logging: "error", //  'log' | 'info' | 'warn' | 'error' | 'none' | 'verbose'
        overlay: {
          errors: false,
          warnings: false,
        },
        progress: true,
      },
      compress: false,
      historyApiFallback: true,
      host: "localhost",
      hot: true,
      liveReload: false,
      open: true,
      port: 9000,
      static: path.join(process.cwd(), "public"),
      devMiddleware: {
        index: true,
        publicPath: "/",
        writeToDisk: true,
      },
    },
    plugins: [
      new ESLintPlugin({
        extensions: [".js", ".jsx"],
        fix: false,
        failOnWarning: false,
        outputReport: true,
      }),
      new HtmlWebpackPlugin({
        template: "public/index.html",
        minify: {
          minifyJS: false,
        },
      }),
      new MiniCssExtractPlugin({
        filename: "[name].bundle.css",
        chunkFilename: "[id].css",
      }),
    ],
  };

  return config;
};
