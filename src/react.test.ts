import { strict as assert } from 'node:assert';
import eslintReact from '@eslint-react/eslint-plugin';
import { react } from './react.js';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import { rulesToRuleNames } from './test-utils/rules-to-rule-names.js';
import { test } from 'node:test';

const reactRules = Object.keys(react.rules);

await test('react rules', () => {
  const actual = new Set(reactRules.filter(rule => rule.startsWith('@eslint-react/')));
  const expected = new Set(rulesToRuleNames(eslintReact.rules, '@eslint-react')
    // Ignore `x-*` rules
    .filter(name => !name.startsWith('@eslint-react/x-')));

  assert.deepStrictEqual(actual, expected);
});

await test('react-hooks rules', () => {
  const actual = new Set(reactRules.filter(rule => rule.startsWith('react-hooks/')));
  const expected = new Set(rulesToRuleNames(reactHooksPlugin.rules, 'react-hooks'));

  assert.deepStrictEqual(actual, expected);
});
