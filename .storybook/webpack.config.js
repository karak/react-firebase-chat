const baseConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = function () {
  var newConfig = baseConfig.apply(this, arguments);

  newConfig.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    include: /stories/,
    loaders: ['tslint-loader', 'ts-loader']
  });

  newConfig.resolve.extensions.push('.ts', '.tsx');

  return newConfig;
};