import type { Linter } from 'eslint';
import base from './base.js';
import importXRules from './rules/import-x-rules.js';

const config = {
  ...base,
  files: ['**/*.{cjs,cts}'],
  languageOptions: {
    ...base.languageOptions,
    sourceType: 'commonjs'
  },
  rules: {
    ...base.rules,
    // Disable all import rules
    ...Object.fromEntries(Object.keys(importXRules).map(rule => [rule, 'off']))
  }
} as const satisfies Linter.Config;

export default config;
