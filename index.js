'use strict';

const baseV2 = require('./base-v2');
const es2015V2 = require('./es2015-v2');
const extend = require('extend');
const v2 = require('./v2');

module.exports = extend(true, baseV2, es2015V2, v2);
