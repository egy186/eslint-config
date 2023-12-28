'use strict';

const baseRules = require('./lib/base-rules');
const jsdocRules = require('./lib/jsdoc-rules');
const stylisticRules = require('./lib/stylistic-rules');

module.exports = {
  env: { es2021: true },
  plugins: ['jsdoc', '@stylistic'],
  reportUnusedDisableDirectives: true,
  rules: {
    ...baseRules,
    ...jsdocRules,
    ...stylisticRules
  }
};
