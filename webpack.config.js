const app_dir = __dirname + '/public'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: app_dir + '/index.html',
  filename: 'index.html',
  favicon: './public/favicon.ico',
  manifest: './public/manifest.json',
  inject: 'body'
}) 

const config = {
  mode: 'development',
  entry: __dirname + '/src/index.tsx',
  output: {
    path: __dirname + '/dist',
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }, {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /(node_modules|bower_components)/
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
      exclude: /node_modules/,
      use: 'file-loader'
    },
    ]
  },
  plugins: [HTMLWebpackPluginConfig],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,

  },
}
module.exports = config