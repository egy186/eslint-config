import type { ESLint } from 'eslint';
import importRules from './rules/import-rules.js';

const config = {
  parserOptions: { sourceType: 'script' },
  // Disable all import rules
  rules: Object.fromEntries(Object.keys(importRules).map(rule => [rule, 'off']))
} satisfies ESLint.ConfigData;

export default config;
