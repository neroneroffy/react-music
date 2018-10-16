const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config')
const theme = require('../package.json').theme
const serverConfig = {
  entry: path.join(__dirname, '../src/server/index.js'),
  target: 'node',
  mode: 'development',
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
          { loader: 'style-loader' },
          { loader: 'css-loader?modules&localIdentName=[name]-[hash:base64:5]' },
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
  }
}
module.exports = merge(serverConfig, baseConfig)