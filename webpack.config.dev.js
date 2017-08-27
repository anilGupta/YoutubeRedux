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
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/only-dev-server',
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
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          use: [
            { loader: "css-loader" },
            { loader: "sass-loader" }
          ],
        }))
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    ExtractTextPluginConfig,
    HtmlWebpackPluginConfig,
    CopyAssetPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  devtool: 'cheap-source-map',
  target: 'web',
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "build"),
    publicPath: '/',
    port: 9000,
    historyApiFallback: true
  }
};