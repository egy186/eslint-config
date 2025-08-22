import { strict as assert } from 'node:assert';
import { rulesToRuleNames } from './test-utils/rules-to-rule-names.js';
import { test } from 'node:test';
import { vitest } from './vitest.js';
import vitestPlugin from '@vitest/eslint-plugin';

test('vitest rules', () => {
  const actual = new Set(Object.keys(vitest.rules).filter(rule => rule.startsWith('vitest/')));
  const expected = new Set(rulesToRuleNames(vitestPlugin.rules, 'vitest'));

  assert.deepStrictEqual(actual, expected);
});
