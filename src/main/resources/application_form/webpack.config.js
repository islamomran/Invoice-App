
const path = require('path');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NunjucksWebpackPlugin = require('nunjucks-webpack-plugin');

const _srcBase = path.join(__dirname, 'src');
const _dstBase = path.join(__dirname, '../static/');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    app: './index.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node-modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    inline: true,
    stats: 'errors-only'
  },
  plugins: [
	new NunjucksWebpackPlugin({
      templates: [
        {
          from: path.join(_srcBase,'reviewInvoice.njk'),
          to: path.join(_dstBase, 'forms/reviewInvoice.html'),
        },
        {
          from: path.join(_srcBase,'manualMetaData.njk'),
          to: path.join(_dstBase, 'forms/manualMetaData.html'),
        },
        {
          from: path.join(_srcBase, 'acceptOrReject.njk'),
          to: path.join(_dstBase, 'forms/acceptOrReject.html'),
        }
      ]
    }),

    //new HtmlWebpackPlugin({
    //  inlineSource: '.(js|css)$' // embed all javascript and css inline
    //}),
    // new HtmlWebpackInlineSourcePlugin()
  ]  
};
