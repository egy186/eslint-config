import type { Linter } from 'eslint';
import importRules from './rules/import-rules.js';
import index from './index.js';

const config = {
  ...index,
  files: ['**/*.{cjs,cts}'],
  languageOptions: {
    ...index.languageOptions,
    sourceType: 'commonjs'
  },
  rules: {
    ...index.rules,
    // Disable all import rules
    ...Object.fromEntries(Object.keys(importRules).map(rule => [rule, 'off']))
  }
} satisfies Linter.FlatConfig;

export default config;
