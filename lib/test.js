'use strict';

const checkRules = require('./check-rules');
const omitDeprecated = require('./omit-deprecated');

// All rules
const eslintRules = omitDeprecated(require('eslint/conf/eslint-all').rules);
const importRules = omitDeprecated(require('eslint-plugin-import').rules);
const nodeRules = omitDeprecated(require('eslint-plugin-node').rules);
const reactRules = omitDeprecated(require('eslint-plugin-react').rules);

// My rules
const index = require('../index').rules;
const modules = require('../modules').rules;
const node = require('../node').rules;
const react = require('../react').rules;

// Test
const passEslint = checkRules(index, eslintRules);
const passModules = checkRules(modules, importRules, 'import');
const passNode = checkRules(node, nodeRules, 'node');
const passReact = checkRules(react, reactRules, 'react');
const pass = passEslint && passModules && passNode && passReact;

process.exitCode = pass ? 0 : 1;
