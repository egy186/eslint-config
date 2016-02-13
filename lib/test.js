/* eslint no-console: 0 */

'use strict';

const conf = require('eslint/conf/eslint.json');
const egy186 = require('../index');

let exitCode = 0;

for (const rule in conf.rules) {
  if (!(rule in egy186.rules)) {
    console.error('Missing rule:', rule);
    exitCode = 1;
  }
}

for (const rule in egy186.rules) {
  if (!(rule in conf.rules)) {
    console.error('Unknown rule:', rule);
    exitCode = 1;
  }
}

process.exit(exitCode);
