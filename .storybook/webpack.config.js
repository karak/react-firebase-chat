const baseConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = function () {
  var newConfig = baseConfig.apply(this, arguments);

  newConfig.module.rules.push({
    test: /\.tsx?$/,
    exclude: [/node_modules/, /__tests__/, /\.(test|spec)\.tsx?$/],
    include: [/stories/, /src/],
    loaders: ['ts-loader', 'tslint-loader']
  });

  newConfig.resolve.extensions.push('.ts', '.tsx');

  return newConfig;
};
