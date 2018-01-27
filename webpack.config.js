const path = require('path');
const pathToSpSlidemenu = path.join(__dirname, 'vendor', 't.js', 't.js');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/js')
  },
  resolve: {
    alias: {
      SpSlidemenu: pathToSpSlidemenu,
    },
  },
  module: {
     rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader"
          }
     ],
     loaders: [
       { test: pathToSpSlidemenu, loader: 'exports?SpSlidemenu' },
     ]
  }
};
