module.exports = {
  entry: './js/main.js',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      }
    ]
  }
};

