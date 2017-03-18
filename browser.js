'use strict';

const node = require('./node');

module.exports = {
  env: {
    browser: true,
    node: false
  },
  // Disable all node rules
  rules: Object.keys(node.rules).reduce((rules, key) => {
    rules[key] = 'off';
    return rules;
  }, {})
};
