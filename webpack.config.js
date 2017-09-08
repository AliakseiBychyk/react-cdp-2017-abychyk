const webpack = require('webpack')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '/public'),
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true,
    }),
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
        test: /\.css$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
      ]
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
      }
    ]
  }
}