module.exports = {
  entry: './js/index.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};