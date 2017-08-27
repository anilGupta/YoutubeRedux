const path = require('path'),
      webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      CopyWebpackPlugin = require('copy-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
      }),
      CopyAssetPluginConfig = new CopyWebpackPlugin([
        { from: './src/assets', to: './assets' },
      ]),
      ExtractTextPluginConfig = new ExtractTextPlugin({ filename: 'style.css', disable: false, allChunks: false });

module.exports = {
  entry:[
    './src/index.js',
    './src/assets/styles/style.scss'
  ]
  ,
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    loaders: [
      { 
        test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/
      },
      { 
          test: /\.scss$/, exclude: /node_modules/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [ 'css-loader', { loader: 'sass-loader', query: { sourceMap: false } }, ], }),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.ProvidePlugin({
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),
    ExtractTextPluginConfig,
    HtmlWebpackPluginConfig,
    CopyAssetPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),

  ],
  devtool: 'cheap-source-map',
  target: 'web'
};