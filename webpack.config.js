const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackOnBuildPlugin = require('on-build-webpack');
const spawn = require('child_process').spawn;
const outputFolder = 'dist';

module.exports = {
  entry: './src/html-generation/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, outputFolder),
    filename: () => 'resume.js?t=' + new Date().getTime()
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({template: './src/html-generation/index.html', filename: 'resume.html'}),
    new WebpackOnBuildPlugin(() => {
      const child = spawn('sh', [`${__dirname}/generate-pdf.sh`]);
      child.stdout.on('data', (data) => {
        process.stdout.write(data);
      });
      child.stderr.on('data', (data) => {
        process.stderr.write(data);
      });
    })
  ]
};
