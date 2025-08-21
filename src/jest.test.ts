import { strict as assert } from 'node:assert';
import { jest } from './jest.js';
import jestPlugin from 'eslint-plugin-jest';
import { rulesToRuleNames } from './test-utils/rules-to-rule-names.js';
import { test } from 'node:test';

test('jest rules', () => {
  const actual = new Set(Object.keys(jest.rules).filter(rule => rule.startsWith('jest/')));
  const expected = new Set(rulesToRuleNames(jestPlugin.rules, 'jest'));

  assert.deepStrictEqual(actual, expected);
});
