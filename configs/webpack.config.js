const path = require('path')
const webpack = require('webpack')
const tsImportPluginFactory = require('ts-import-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const theme = require('../package.json').theme

const config = {
  resolve: {
    extensions: [ '.ts', '.tsx', '.js'  ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules'),
        ],

      },
      {
        test: /\.(tsx|ts)$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: [ tsImportPluginFactory({
                  libraryDirectory: 'es',
                  libraryName: 'antd-mobile',
                  style: true,
                }) ]
              }),
              compilerOptions: {
                module: 'es2015'
              }
            },
          }
        ],
        exclude: [ path.join(__dirname, '../node_modules') ]
      },
    ]
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'music',
  //     filename: path.join(__dirname, '../build/index.html'),
  //     template: path.join(__dirname, '../public/index.html'),
  //     inject: true,
  //   }),
  // ]
}
/*
if (isDev) {
  config.devServer = {
    host: '0.0.0.0',
      port: '8080',
      contentBase: path.join(__dirname, '../public'),
      overlay: {
      error: true,
    },
    historyApiFallback: {
      index: path.join(__dirname, '../public/index.html'),
    },
    hot: true,
  }
  config.entry = {
    app :[
      "react-hot-loader/patch",
      path.join(__dirname, '../src/client/index.tsx'),
    ]
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
}
*/
module.exports = config
