const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config')
const theme = require('../package.json').theme
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const clientConfig = {
  entry: path.join(__dirname, '../src/client/index.tsx'),
  output: {
    path: path.join(__dirname, '../public'),
    filename: '[name].client.js',
    chunkFilename: "[name].js",
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js'  ]
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        include: [ path.join(__dirname, '../node_modules/antd-mobile') ],
        use: [
          {loader: MiniCssExtractPlugin.loader},
          // { loader: 'style-loader' },
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
          {loader: MiniCssExtractPlugin.loader},
          // { loader: 'style-loader' },
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
          {loader: MiniCssExtractPlugin.loader},
          'css-loader',
        ],
      },
    ]
  },
  optimization: {
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: -20,
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "style.[id].css",
      allChunks: true
    })
  ],
}

module.exports = merge(clientConfig, baseConfig)
