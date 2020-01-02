const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const jsonImporter = require('node-sass-json-importer');

module.exports = (env) => {

  const isDevelopment = env.mode === "development";

  if (!validateArgv(env)) {
    return;
  }

  return {
    mode: env.mode,
    entry: `./projects/${env.project}/index.jsx`,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                sassOptions : {
                  includePaths : [path.resolve(__dirname, `projects/${env.project}/css/`)]
                }
              },
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            "css-loader"
          ]
        },
        {
          test: /\.(woff|ttf|woff2|png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.scss']
    },
    output: {
      path:  `${__dirname}/dist/${env.project}/www`,
      publicPath: './',
      filename: 'bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title : env.project,
        custom : (!isDevelopment && env.target == 'mobile-cordova')? `<script src="cordova.js"></script>` : '',
        template : `./shared/assets/index_page/index.html`
      }),
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : '[name].[hash].css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
      }),
      new webpack.DefinePlugin({
        'process.env.project' : JSON.stringify(env.project)
      })
    ],
    devServer: {
      port: 8080,
      open: true,
      contentBase: `${__dirname}/dist/${env.project}/www`,
      hot: true
    }
  };
}


function validateArgv(env) {
  if (!env.project) {
    console.error("Please specify the project you want to serve");
    return false;
  } 
  else if(["development","production"].indexOf(env.mode) == -1) {
    console.error("Please specify mode of environment. development or production");
    return false;
  }
  return true;
}