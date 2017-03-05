'use strict';

const checkRules = require('./check-rules');
const deleteDeprecated = require('./delete-deprecated-rules');
const path = require('path');
const requireDir = require('require-dir');

// All eslint rules
const eslintRulesDir = path.join(__dirname, '../node_modules/eslint/lib/rules');
const eslintRules = requireDir(eslintRulesDir);
deleteDeprecated(eslintRules);

// All eslint-plugin-react rules
const reactRulesDir = path.join(__dirname, '../node_modules/eslint-plugin-react/lib/rules');
const reactRules = requireDir(reactRulesDir);
deleteDeprecated(reactRules);

// My rules
const index = require('../index').rules;
const react = require('../react').rules;

// Test
const passEslint = checkRules(index, eslintRules);
const passReact = checkRules(react, reactRules, 'react');
const pass = passEslint && passReact;
// eslint-disable-next-line no-process-exit
process.exit(pass ? 0 : 1);
