var path = require('path');

module.export = {
  // mode: 'production',
  entry: {
    main: path.resolve('../src/js/index1.js'),
  },
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
};