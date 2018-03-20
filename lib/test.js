'use strict';

const checkRules = require('./check-rules');
const path = require('path');
const requireRules = require('./require-rules');

// All eslint rules
const eslintRulesDir = path.join(__dirname, '../node_modules/eslint/lib/rules');
const eslintRules = requireRules(eslintRulesDir);

// All eslint-plugin-import rules
const importRulesDir = path.join(__dirname, '../node_modules/eslint-plugin-import/lib/rules');
const importRules = requireRules(importRulesDir);

// All eslint-plugin-node rules
const nodeRulesDir = path.join(__dirname, '../node_modules/eslint-plugin-node/lib/rules');
const nodeRules = requireRules(nodeRulesDir);

// All eslint-plugin-react rules
const reactRulesDir = path.join(__dirname, '../node_modules/eslint-plugin-react/lib/rules');
const reactRules = requireRules(reactRulesDir);

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
