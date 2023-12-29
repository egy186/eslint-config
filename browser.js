'use strict';

const node = require('./node');

module.exports = {
  env: {
    browser: true,
    node: false
  },
  // Disable all node rules
  rules: Object.fromEntries(Object.keys(node.rules).map(rule => [rule, 'off']))
};
