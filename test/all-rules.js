'use strict';

const eslint = require('eslint/use-at-your-own-risk');
const importPlugin = require('eslint-plugin-import');
const jestPlugin = require('eslint-plugin-jest');
const jsdocPlugin = require('eslint-plugin-jsdoc');
const nPlugin = require('eslint-plugin-n');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const reactPlugin = require('eslint-plugin-react');
const stylisticPluginMetadata = require('@eslint-stylistic/metadata');
const typeScriptPlugin = require('@typescript-eslint/eslint-plugin');

const ruleIsDeprecated = rule => rule?.meta?.deprecated === true;

const rulesToRuleNames = (rules, pluginName) => [...Object.entries(rules)]
  .filter(([, rule]) => !ruleIsDeprecated(rule))
  .map(([name]) => {
    if (typeof pluginName === 'string') {
      return `${pluginName}/${name}`;
    }
    return name;
  });

const eslintRules = rulesToRuleNames(Object.fromEntries(eslint.builtinRules));
const importRules = rulesToRuleNames(importPlugin.rules, 'import');
const jestRules = rulesToRuleNames(jestPlugin.rules, 'jest');
const jsdocRules = rulesToRuleNames(jsdocPlugin.rules, 'jsdoc');
const nRules = rulesToRuleNames(nPlugin.rules, 'n');
const reactHooksRules = rulesToRuleNames(reactHooksPlugin.rules, 'react-hooks');
const reactRules = rulesToRuleNames(reactPlugin.rules, 'react');
const stylisticRules = rulesToRuleNames(Object.fromEntries(stylisticPluginMetadata.rules.map(rule => [rule.name, rule])), '@stylistic');
const typeScriptRules = rulesToRuleNames(typeScriptPlugin.rules, '@typescript-eslint');

const allRules = [
  ...eslintRules,
  ...importRules,
  ...jestRules,
  ...jsdocRules,
  ...nRules,
  ...reactHooksRules,
  ...reactRules,
  ...stylisticRules,
  ...typeScriptRules
];

module.exports = allRules;
