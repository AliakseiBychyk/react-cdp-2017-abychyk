const webpack = require('webpack')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = (env) => {
  const isProduction = env === 'production'
  const CSSExtract = new ExtractTextPlugin('styles.css')

  return {
    entry: './src/index.js',
      output: {
      path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },

    plugins: [
      // new webpack.optimize.UglifyJsPlugin({
      //   compress: {
      //     warnings: false,
      //     drop_console: false,
      //   }
      // }),
      // new webpack.HotModuleReplacementPlugin(),
      // new OptimizeCssAssetsPlugin({
      //   assetNameRegExp: /\.optimize\.css$/g,
      //   cssProcessor: require('cssnano'),
      //   cssProcessorOptions: { discardComments: { removeAll: true } },
      //   canPrint: true,
      // }),
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
              'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
              'autoprefixer-loader',
              'sass-loader'
            ]
          })
        },
      ]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
  }
}