const path = require('path')
const webpack = require('webpack')
const tsImportPluginFactory = require('ts-import-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const theme = require('../package.json').theme
const isDev = process.env.NODE_ENV === 'development'
const config = {
  entry: path.join(__dirname, '../src/client/index.tsx'),
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[hash:8]-[name].js',
  },
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
          'style-loader',
          'css-loader',
        ],
      },

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
      path.join(__dirname, '../src/client/index.tsx'),
    ]
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
}
module.exports = config