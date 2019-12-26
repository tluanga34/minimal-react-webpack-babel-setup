const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
// const jsonImporter = require('node-sass-json-importer');

console.log(path.resolve(__dirname, 'projects/cleanerbin/css/_settings.scss'));

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
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.scss']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
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
      contentBase: './dist',
      hot: true
    }
  };

}


function validateArgv(env) {
  console.log("env");
  console.log(env);
  if (!env.project) {
    console.error("Please specify the project you want to serve");
    return false;
  }

  return true;

}