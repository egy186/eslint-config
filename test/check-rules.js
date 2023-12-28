'use strict';

const _ = require('lodash');

const checkRules = (listed, expected, prefix = '') => {
  const listedKeys = Object.keys(listed).filter(key => key.startsWith(prefix));
  const expectedKeys = Object.keys(expected).map(key => `${prefix}${key}`);

  // Missing rules
  const missing = _.difference(expectedKeys, listedKeys);
  missing.forEach(rule => {
  // eslint-disable-next-line no-console
    console.log('Missing rule:', rule);
  });

  // Extra rules
  const extra = _.difference(listedKeys, expectedKeys);
  extra.forEach(rule => {
    // eslint-disable-next-line no-console
    console.log('Unknown rule:', rule);
  });

  const pass = missing.length === 0 && extra.length === 0;
  return pass;
};

module.exports = checkRules;
