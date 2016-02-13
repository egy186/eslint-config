'use strict';

const es2015 = require('./es2015');
const extend = require('extend');

module.exports = extend(true, es2015, {
  rules: {
    'no-confusing-arrow': 2,
    'no-useless-constructor': 2,
    'sort-imports': 2,
    'template-curly-spacing': [2, 'never']
  }
});
