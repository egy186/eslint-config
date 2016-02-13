'use strict';

const airbnbBestPractices = require('eslint-config-airbnb/rules/best-practices');
const airbnbErrors = require('eslint-config-airbnb/rules/errors');
const airbnbLegacy = require('eslint-config-airbnb/rules/legacy');
const airbnbNode = require('eslint-config-airbnb/rules/node');
const airbnbStyle = require('eslint-config-airbnb/rules/style');
const airbnbVariables = require('eslint-config-airbnb/rules/variables');
const extend = require('extend');

module.exports = extend(
  true,
  airbnbBestPractices,
  airbnbErrors,
  airbnbLegacy,
  airbnbNode,
  airbnbStyle,
  airbnbVariables,
  {
    env: {
      node: false
    },
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
  }
);
