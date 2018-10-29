const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config')
const theme = require('../package.json').theme
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'
const clientConfig = {
  entry: path.join(__dirname, '../src/client/index.tsx'),
  output: {
    path: path.join(__dirname, '../public'),
    filename: '[name].client.js',
    chunkFilename: "[name].js",
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.json' ]
  },
  module: {
    rules: []
  },
  devtool: "#eval-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: 'music',
      filename: path.join(__dirname, '../public/index.html'),
      template: path.join(__dirname, '../public/index.html'),
      inject: true,
    }),

  ]
}
if (isDev) {
  const devRules = [
    {
      test: /\.less$/,
      include: [ path.join(__dirname, '../node_modules/antd-mobile') ],
      use: [
        { loader: 'style-loader' },
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
        {loader: 'style-loader'},
        'css-loader',
      ],
    },
  ]
  clientConfig.entry = [
    "react-hot-loader/patch",
    path.join(__dirname, '../src/client/index.tsx'),
  ]
  clientConfig.mode = 'development'
  clientConfig.module.rules = clientConfig.module.rules.concat(devRules)
  clientConfig.devServer = {
    host: '0.0.0.0',
    port: '8080',
    contentBase: path.join(__dirname, '../public'),
    inline: true,
    overlay: {
      error: true,
    },
    historyApiFallback: true,
    hot: true,
  }
  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
}
if (isProd) {
  const prodRules = [
    {
      test: /\.less$/,
      include: /node_modules/,
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
      exclude: /node_modules/,
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
  clientConfig.mode = 'production'
  clientConfig.module.rules = clientConfig.module.rules.concat(prodRules)
  clientConfig.optimization = {
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
  }
  clientConfig.plugins.push(
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "style.[id].css",
      allChunks: true
    })
  )
}
module.exports = merge(clientConfig, baseConfig)
