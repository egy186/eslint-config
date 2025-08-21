import type { Rules } from './test-utils/rules-to-rule-names.js';
import { strict as assert } from 'node:assert';
import { base } from '@egy186/eslint-config';
import eslint from '@eslint/js';
import { rules as importPluginRules } from 'eslint-plugin-import';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import nPlugin from 'eslint-plugin-n';
import { rulesToRuleNames } from './test-utils/rules-to-rule-names.js';
import stylistic from '@stylistic/eslint-plugin';
import { test } from 'node:test';

const baseRules = Object.keys(base.rules);

test('eslint rules', () => {
  const actual = new Set(baseRules.filter(rule => !rule.includes('/')));
  const expected = new Set(rulesToRuleNames(eslint.configs.all.rules as Rules));

  assert.deepStrictEqual(actual, expected);
});

test('stylistic rules', () => {
  const actual = new Set(baseRules.filter(rule => rule.startsWith('@stylistic/')));
  const expected = new Set(rulesToRuleNames(stylistic.rules, '@stylistic'));

  assert.deepStrictEqual(actual, expected);
});

test('jsdoc rules', () => {
  const actual = new Set(baseRules.filter(rule => rule.startsWith('jsdoc/')));
  const expected = new Set(rulesToRuleNames(jsdocPlugin.rules ?? {}, 'jsdoc'));

  assert.deepStrictEqual(actual, expected);
});

test('import rules', () => {
  const actual = new Set(baseRules.filter(rule => rule.startsWith('import/')));
  const expected = new Set(rulesToRuleNames(importPluginRules, 'import'));

  assert.deepStrictEqual(actual, expected);
});

test('n rules', () => {
  const actual = new Set(baseRules.filter(rule => rule.startsWith('n/')));
  const expected = new Set(rulesToRuleNames(nPlugin.rules ?? {}, 'n'));

  assert.deepStrictEqual(actual, expected);
});
