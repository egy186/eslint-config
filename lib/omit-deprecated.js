'use strict';

const _ = require('lodash');

// @ts-ignore
const isDeprecated = rule => _.get(rule, ['meta', 'deprecated'], false);

// @ts-ignore
const omitDeprecated = rules => _.omitBy(rules, isDeprecated);

module.exports = omitDeprecated;
