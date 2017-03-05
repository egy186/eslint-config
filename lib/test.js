'use strict';

const checkRules = require('./check-rules');
const deleteDeprecated = require('./delete-deprecated-rules');
const path = require('path');
const requireDir = require('require-dir');

// All eslint rules
const eslintRulesDir = path.join(__dirname, '../node_modules/eslint/lib/rules');
const eslintRules = requireDir(eslintRulesDir);
deleteDeprecated(eslintRules);

// All eslint-plugin-import rules
const importRulesDir = path.join(__dirname, '../node_modules/eslint-plugin-import/lib/rules');
const importRules = requireDir(importRulesDir);
deleteDeprecated(importRules);

// All eslint-plugin-react rules
const reactRulesDir = path.join(__dirname, '../node_modules/eslint-plugin-react/lib/rules');
const reactRules = requireDir(reactRulesDir);
deleteDeprecated(reactRules);

// My rules
const index = require('../index').rules;
const modules = require('../modules').rules;
const react = require('../react').rules;

// Test
const passEslint = checkRules(index, eslintRules);
const passModules = checkRules(modules, importRules, 'import');
const passReact = checkRules(react, reactRules, 'react');
const pass = passEslint && passModules && passReact;
// eslint-disable-next-line no-process-exit
process.exit(pass ? 0 : 1);
