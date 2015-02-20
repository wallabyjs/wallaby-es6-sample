module.exports = function () {
  return {
    files: [
      'src/*.js'
    ],

    tests: [
      'test/*Spec.js'
    ],

    preprocessors: {
      '**/*.js': file => require('babel').transform(file.content, {sourceMap: true})
    }
  };
};