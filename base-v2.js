'use strict';

module.exports = {
  extends: 'egy186/base',
  rules: {
    'array-callback-return': 2,
    'keyword-spacing': [2, {
      after: true,
      before: true
    }],
    'no-implicit-globals': 2,
    'no-multiple-empty-lines': [2, {
      max: 2,
      maxBOF: 0,
      maxEOF: 1
    }],
    'no-self-assign': 2,
    'no-unmodified-loop-condition': 2,
    'no-whitespace-before-property': 2,
    strict: [2, 'safe']
  }
};
