const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: "./public",
  },
  module: {
    rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                      loader: 'babel-loader',
                      options: {
                        presets: ['@babel/preset-env']
                      }
              }   
            },
            { test:/\.(scss|css)$/, use:["style-loader", "css-loader", "sass-loader"]},
    ]
  }
};