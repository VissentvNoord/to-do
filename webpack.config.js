const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    objects: './src/scripts/ClassManager.js',
    logger: './src/scripts/logger.js',
    displayController: './src/scripts/DisplayController.js'
  },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  module: {
    rules:[
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
    ]
},

  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/template.html'
    }),
  ],
};