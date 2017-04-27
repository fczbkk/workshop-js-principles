module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: ['test/**/*.spec.js'],
    preprocessors: {'test/**/*.spec.js': ['webpack']},
    webpack: {
      module: {
        loaders: [
          {
            test: /\.js$/,
            loaders: ['babel-loader']
          }
        ]
      }
    },
    webpackMiddleware: {noInfo: true},
    browsers: ['PhantomJS'],
    singleRun: true
  });
};