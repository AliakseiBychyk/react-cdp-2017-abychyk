const webpack = require('webpack')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = (env) => {
  const isProduction = env === 'production'
  const CSSExtract = new ExtractTextPlugin({
    filename: 'styles.css',
    allChunks: true
  })

  return {
    entry: ['babel-polyfill', './src/index.js'],
      output: {
      path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },

    plugins: [
        CSSExtract
    ],

    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader'
        },
        {
          test: /\.json$/,
          exclude: /(node_modules)/,
          loader: 'json-loader'
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 1,
                  modules: true,
                  localIdentName: '[name]__[local]___[hash:base64:5]'
                }
              },
              'autoprefixer-loader',
              'sass-loader'
            ]
          })
        },
      ]
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  }
}