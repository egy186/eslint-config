'use strict';

const _ = require('lodash');
const requireDir = require('require-dir');

const isDeprecated = rule => _.get(rule, ['meta', 'deprecated'], false);

const requireRules = dir => {
  const rules = requireDir(dir);
  return _.omitBy(rules, isDeprecated);
};

module.exports = requireRules;
