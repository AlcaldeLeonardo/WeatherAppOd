const ESLintWebpackPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/img/weatherAppIcon.png'
    }),
    new ESLintWebpackPlugin({
      extensions: ['js'],
      fix: true,
      failOnError: true,
      overrideConfigFile: path.resolve(__dirname, '.eslintrc.json')
    })
  ]
}
