import { strict as assert } from 'node:assert';
import { react } from './react.js';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactPlugin from 'eslint-plugin-react';
import { rulesToRuleNames } from './test-utils/rules-to-rule-names.js';
import { test } from 'node:test';

const reactRules = Object.keys(react.rules);

test('react rules', () => {
  const actual = new Set(reactRules.filter(rule => rule.startsWith('react/')));
  const expected = new Set(rulesToRuleNames(reactPlugin.rules, 'react'));

  assert.deepStrictEqual(actual, expected);
});

test('react-hooks rules', () => {
  const actual = new Set(reactRules.filter(rule => rule.startsWith('react-hooks/')));
  const expected = new Set(rulesToRuleNames(reactHooksPlugin.rules, 'react-hooks'));

  assert.deepStrictEqual(actual, expected);
});
