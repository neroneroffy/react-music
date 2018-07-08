const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'
const config = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[hash:8]-[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules'),
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
          }
        ]
      }

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'music',
      filename: path.join(__dirname, '../build/index.html'),
      template: path.join(__dirname, '../public/index.html'),
      inject: true,
    }),
  ]
}
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
      path.join(__dirname, '../src/index.js'),
    ]
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
}
module.exports = config