const webpack = require('webpack');

module.exports = {
  // 기존 설정
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};
