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
const stylisticRules = omitDeprecated(_.keyBy(require('@eslint-stylistic/metadata').rules, 'name'));
const typeScriptRules = omitDeprecated(require('@typescript-eslint/eslint-plugin').rules);

// My rules
const eslint = require('../src/base').rules;
const jest = require('../src/jest').rules;
const jsdoc = require('../src/jsdoc').rules;
const modules = require('../src/modules').rules;
const node = require('../src/node').rules;
const react = require('../src/react').rules;
const stylistic = require('../src/stylistic').rules;
const typeScript = require('../src/typescript').rules;

// Test
const pass = _.every([
  checkRules(eslint, eslintRules),
  checkRules(jest, jestRules, 'jest/'),
  checkRules(jsdoc, jsdocRules, 'jsdoc/'),
  checkRules(modules, importRules, 'import/'),
  checkRules(node, nRules, 'n/'),
  checkRules(react, reactRules, 'react/'),
  checkRules(react, reactHooksRules, 'react-hooks/'),
  checkRules(stylistic, stylisticRules, '@stylistic/'),
  checkRules(typeScript, typeScriptRules, '@typescript-eslint/')
]);

process.exitCode = pass ? 0 : 1;
