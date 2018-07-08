const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
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
  devServer: {
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'musin',
      filename: path.join(__dirname, '../build/index.html'),
      template: path.join(__dirname, '../public/index.html'),
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}