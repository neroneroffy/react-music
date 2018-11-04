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
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 8000,
          name: 'static/img/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:8].[ext]'
        }
      }
    ]
  },

}

module.exports = config
