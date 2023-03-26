'use strict';

const _ = require('lodash');
const checkRules = require('./check-rules');
const omitDeprecated = require('./omit-deprecated');

// All rules
const eslintRules = omitDeprecated(Object.fromEntries(require('eslint/use-at-your-own-risk').builtinRules));
const importRules = omitDeprecated(require('eslint-plugin-import').rules);
const jestRules = omitDeprecated(require('eslint-plugin-jest').rules);
const jsdocRules = omitDeprecated(require('eslint-plugin-jsdoc').rules);
const nRules = omitDeprecated(require('eslint-plugin-n').rules);
const reactRules = omitDeprecated(require('eslint-plugin-react').rules);
const reactHooksRules = omitDeprecated(require('eslint-plugin-react-hooks').rules);
const typeScriptRules = omitDeprecated(require('@typescript-eslint/eslint-plugin').rules);

// My rules
const eslint = require('../base').rules;
const jest = require('../jest').rules;
const jsdoc = require('../jsdoc').rules;
const modules = require('../modules').rules;
const node = require('../node').rules;
const react = require('../react').rules;
const typeScript = require('../typescript').rules;

// Test
const pass = _.every([
  checkRules(eslint, eslintRules),
  checkRules(jest, jestRules, 'jest/'),
  checkRules(jsdoc, jsdocRules, 'jsdoc/'),
  checkRules(modules, importRules, 'import/'),
  checkRules(node, nRules, 'n/'),
  checkRules(react, reactRules, 'react/'),
  checkRules(react, reactHooksRules, 'react-hooks/'),
  checkRules(typeScript, typeScriptRules, '@typescript-eslint/')
]);

process.exitCode = pass ? 0 : 1;
