/* eslint no-console: 0 */

'use strict';

const conf = require('eslint/conf/eslint-all');
const index = require('../index');

let exitCode = 0;

for (const rule in conf.rules) {
  if (!(rule in index.rules)) {
    console.error('Missing rule:', rule);
    exitCode = 1;
  }
}

for (const rule in index.rules) {
  if (!(rule in conf.rules)) {
    console.error('Unknown rule:', rule);
    exitCode = 1;
  }
}

// eslint-disable-next-line no-process-exit
process.exit(exitCode);
