/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const dotenv = require('dotenv').config({
  path: path.resolve(__dirname, '.env'),
})

const cwd = process.cwd()

// TODO: It should be turn `webpack.config.dev.js` in the future
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  context: path.resolve(cwd, './'),
  entry: './src/index.tsx',
  output: {
    path: path.join(cwd, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    fallback: {
      fs: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader?cacheDirectory'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    port: 3000,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    // new Dotenv({
    //   path: './.env',
    //   safe: true,
    //   ignoreStub: true,
    // }),
    // TODO: It's working but should I do it or should I use dotenv-webpack package?
    // See this issue for more details: https://github.com/mrsteele/dotenv-webpack/issues/271
    new webpack.DefinePlugin({
      URL:
        process.env.NODE_ENV === 'development'
          ? `'http://localhost:3000'`
          : `'https://api.myapp.com'`,
    }),
    new ReactRefreshPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new NodePolyfillPlugin(),
  ],
}
