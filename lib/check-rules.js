'use strict';

const _ = require('lodash');

const checkRules = (listed, expected, prefix) => {
  const listedKeys = Object.keys(listed);
  const expectedKeys = Object.keys(expected).map(key => {
    if (prefix) {
      return `${prefix}/${key}`;
    }
    return key;
  });

  // Missing rules
  const missing = _.difference(expectedKeys, listedKeys);
  // eslint-disable-next-line no-console
  missing.forEach(rule => console.log('Missing rule:', rule));

  // Extra rules
  const extra = _.difference(listedKeys, expectedKeys);
  // eslint-disable-next-line no-console
  extra.forEach(rule => console.log('Unknown rule:', rule));

  const pass = missing.length === 0 && extra.length === 0;
  return pass;
};

module.exports = checkRules;
