'use strict';

const difference = require('lodash.difference');

const checkRules = (conf, test) => {
  const expected = Object.keys(conf.rules);
  const listed = Object.keys(test.rules);

  const missing = difference(expected, listed);
  const extra = difference(listed, expected);

  const pass = missing.length === 0 && extra.length === 0;

  if (!pass) {
    // eslint-disable-next-line no-console
    missing.forEach(rule => console.log('Missing rule:', rule));
    // eslint-disable-next-line no-console
    extra.forEach(rule => console.log('Unknown rule:', rule));
  }

  return pass;
};

module.exports = checkRules;
