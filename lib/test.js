'use strict';

const _ = require('lodash');
const checkRules = require('./check-rules');
const omitDeprecated = require('./omit-deprecated');

// All rules
const eslintRules = omitDeprecated(require('eslint/conf/eslint-all').rules);
const importRules = omitDeprecated(require('eslint-plugin-import').rules);
const jsdocRules = omitDeprecated(require('eslint-plugin-jsdoc').rules);
const nodeRules = omitDeprecated(require('eslint-plugin-node').rules);
const reactRules = omitDeprecated(require('eslint-plugin-react').rules);
const reactHooksRules = omitDeprecated(require('eslint-plugin-react-hooks').rules);

// My rules
const base = require('../base').rules;
const es2015 = require('../es2015').rules;
const eslint = _.merge(base, es2015);
const jsdoc = require('../jsdoc').rules;
const modules = require('../modules').rules;
const node = require('../node').rules;
const react = require('../react').rules;

// Test
const pass = _.every([
  checkRules(eslint, eslintRules),
  checkRules(jsdoc, jsdocRules, 'jsdoc/'),
  checkRules(modules, importRules, 'import/'),
  checkRules(node, nodeRules, 'node/'),
  checkRules(react, reactRules, 'react/'),
  checkRules(react, reactHooksRules, 'react-hooks/')
]);

process.exitCode = pass ? 0 : 1;
