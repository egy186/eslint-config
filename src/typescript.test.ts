import type { ESLint } from 'eslint';
import { strict as assert } from 'node:assert';
import { rulesToRuleNames } from './test-utils/rules-to-rule-names.js';
import { test } from 'node:test';
import { typescript } from './typescript.js';
import { plugin as typescriptPlugin } from 'typescript-eslint';

await test('typescript rules', () => {
  const actual = new Set(Object.keys(typescript.rules).filter(rule => rule.startsWith('@typescript-eslint/')));
  const expected = new Set(rulesToRuleNames((typescriptPlugin as ESLint.Plugin).rules, '@typescript-eslint'));

  assert.deepStrictEqual(actual, expected);
});
