module.exports = {
  externals: {
    '@nomicfoundation/solidity-analyzer-win32-x64-msvc/solidity-analyzer.win32-x64-msvc.node': 'commonjs2 @nomicfoundation/solidity-analyzer-win32-x64-msvc/solidity-analyzer.win32-x64-msvc.node',
  },
  module: {
    rules: [
      {
        test: /\.node$/,
        loader: 'raw-loader'
      }
    ]
  }
};
