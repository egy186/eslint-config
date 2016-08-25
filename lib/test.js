'use strict';

const conf = require('eslint/conf/eslint-all');
const difference = require('lodash.difference');
const index = require('../index');

const expected = Object.keys(conf.rules);
const listed = Object.keys(index.rules);

const missing = difference(expected, listed);
const extra = difference(listed, expected);

if (missing.length !== 0 || extra.length !== 0) {
  // eslint-disable-next-line no-console
  missing.forEach(rule => console.log('Missing rule:', rule));
  // eslint-disable-next-line no-console
  extra.forEach(rule => console.log('Unknown rule:', rule));
  // eslint-disable-next-line no-process-exit
  process.exit(1);
}
