import type { Linter } from 'eslint';
import base from './base.js';
import importRules from './rules/import-rules.js';

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
    ...Object.fromEntries(Object.keys(importRules).map(rule => [rule, 'off']))
  }
} as const satisfies Linter.FlatConfig;

export default config;
