'use strict';

module.exports = {
  env: {
    es6: true
  },
  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': [2, {
      before: true,
      after: true
    }],
    'constructor-super': 2,
    'generator-star-spacing': [2, {
      before: false,
      after: true
    }],
    'no-class-assign': 2,
    'no-confusing-arrow': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-new-symbol': 2,
    'no-this-before-super': 2,
    'no-var': 2,
    'no-useless-constructor': 2,
    'object-shorthand': [2, 'always'],
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-reflect': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'require-yield': 2,
    'template-curly-spacing': [2, 'never'],
    'yield-star-spacing': [2, {
      before: false,
      after: true
    }]
  }
};
