const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  plugins: [
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
