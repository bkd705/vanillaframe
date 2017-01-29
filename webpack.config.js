module.exports = {
  entry: './app/index.js',
  resolve: { 
    extensions: ['', '.js', '.jsx']
  },
  output: {
    filename: 'bundle.js',
    path: 'dist/',
    publicPath: 'dist/'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-0']
      }
    }]
  },
  plugins: []
}