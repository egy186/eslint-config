'use strict';

const _ = require('lodash');
const base = require('./base');
const jsdoc = require('./jsdoc');
const stylistic = require('./stylistic');

module.exports = _.mergeWith(base, jsdoc, stylistic, (objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
  return undefined;
});
