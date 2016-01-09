var path = require('path');
var webpack = require('webpack');
var minimize = process.argv.indexOf('--no-minimize') === -1 ? true : false;
var plugins = [];

var LIBRARY_NAME = 'ProcessForm';
var OUTPUT_FILE = (minimize) ? 'process-form.min.js' : 'process-form.js';

minimize && plugins.push(new webpack.optimize.UglifyJsPlugin());

module.exports = {
  entry: {
    path: ['./src/process-form.js']
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    library: LIBRARY_NAME,
    filename: OUTPUT_FILE,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    jquery: {
      root: '$',
      commonjs2: 'jquery',
      commonjs: 'jquery',
      amd: 'jquery'
    },
    underscore: {
      root: '_',
      commonjs2: 'underscore',
      commonjs: 'underscore',
      amd: 'underscore'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: plugins
};
