'use strict';

const _ = require('lodash');
const base = require('./base');
const es2015 = require('./es2015');
const jsdoc = require('./jsdoc');

module.exports = _.merge(base, es2015, jsdoc);
