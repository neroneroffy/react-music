const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config')
const CleanWebpackPlugin = require("clean-webpack-plugin");
const theme = require('../package.json').theme
const serverConfig = {
  entry: path.join(__dirname, '../src/server/index.js'),
  target: 'node',
  mode: 'production',
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        include: [ path.join(__dirname, '../node_modules/antd-mobile') ],
        use: [
          { loader: 'isomorphic-style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              modifyVars: theme
            }
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: [ path.join(__dirname, '../node_modules/antd-mobile') ],
        use: [
          { loader: 'isomorphic-style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: theme
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          'css-loader',
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, '../build')]),
  ]
}
module.exports = merge(serverConfig, baseConfig)
