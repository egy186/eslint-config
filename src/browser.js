'use strict';

const _ = require('lodash');
const node = require('./node');

module.exports = {
  env: {
    browser: true,
    node: false
  },
  // Disable all node rules
  rules: _.mapValues(node.rules, () => 'off')
};
