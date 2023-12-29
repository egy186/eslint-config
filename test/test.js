'use strict';

const Tester = require('./tester');
const allRules = require('./all-rules');

// My rules
const baseRules = require('../lib/base-rules');
const jest = require('../jest');
const jsdocRules = require('../lib/jsdoc-rules');
const modules = require('../modules');
const node = require('../node');
const react = require('../react');
const stylisticRules = require('../lib/stylistic-rules');
const typeScript = require('../typescript');

// Test
const tester = new Tester(allRules);

const pass = [
  tester.test(baseRules),
  tester.test(jest.rules, 'jest'),
  tester.test(jsdocRules, 'jsdoc'),
  tester.test(modules.rules, 'import'),
  tester.test(node.rules, 'n'),
  tester.test(react.rules, 'react-hooks'),
  tester.test(react.rules, 'react'),
  tester.test(stylisticRules, '@stylistic'),
  tester.test(typeScript.rules, '@typescript-eslint')
].every(isOk => isOk);

process.exitCode = pass ? 0 : 1;
