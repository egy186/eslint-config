'use strict';

module.exports = {
  env: {
    node: false
  },
  extends: [
    'airbnb/rules/best-practices',
    'airbnb/rules/errors',
    'airbnb/rules/legacy',
    'airbnb/rules/node',
    'airbnb/rules/style',
    'airbnb/rules/variables'
  ],
  rules: {
    'comma-dangle': [2, 'never'],
    'dot-location': [2, 'property'],
    'func-style': [2, 'expression'],
    'handle-callback-err': 2,
    'linebreak-style': 2,
    'max-len': 0,
    'no-extra-parens': [2, 'all'],
    'no-param-reassign': [2, { props: false }],
    'no-path-concat': 2,
    'no-unexpected-multiline': 2,
    'sort-vars': 2,
    'space-before-function-paren': [2, 'always'],
    strict: [2, 'global'],
    'valid-jsdoc': [2, {
      prefer: {
        return: 'return'
      },
      requireReturn: false
    }]
  }
};
