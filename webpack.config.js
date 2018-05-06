const path = require('path');

module.exports = {
  context: path.join(__dirname, 'client'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.less']
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx?$/,
        // exclude: /node_modules/,
        // use: ['babel-loader']
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-class-properties']
        }
      },
      // {
      //   test : /\.jpg$/,
      //   exclude: /(node_modules)/,
      //   loader : 'file-loader'
      // },
      {
        test : /\.gif$/,
        exclude: /(node_modules)/,
        loader : 'file-loader'
      },
      {
        test : /\.css$/,
        // exclude: /(node_modules)/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
};
