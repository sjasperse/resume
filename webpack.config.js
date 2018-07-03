const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputFolder = 'dist';

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, outputFolder),
    filename: () => 'index.js?t=' + new Date().getTime()
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin([outputFolder]),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
