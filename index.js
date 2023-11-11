'use strict';

const _ = require('lodash');
const base = require('./base');
const jsdoc = require('./jsdoc');
const stylistic = require('./stylistic');

module.exports = _.merge(base, jsdoc, stylistic);
