'use strict';

const _ = require('lodash');

const isDeprecated = rule => _.get(rule, ['meta', 'deprecated'], false);

const omitDeprecated = rules => _.omitBy(rules, isDeprecated);

module.exports = omitDeprecated;
