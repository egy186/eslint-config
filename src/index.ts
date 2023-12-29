import type { ESLint } from 'eslint';
import eslintRules from './rules/eslint-rules.js';
import importRules from './rules/import-rules.js';
import jsdocRules from './rules/jsdoc-rules.js';
import nRules from './rules/n-rules.js';
import stylisticRules from './rules/stylistic-rules.js';

const config = {
  env: {
    es2022: true,
    node: true
  },
  parserOptions: { sourceType: 'module' },
  plugins: [
    'import',
    'jsdoc',
    'n',
    '@stylistic'
  ],
  reportUnusedDisableDirectives: true,
  rules: {
    ...eslintRules,
    ...importRules,
    ...jsdocRules,
    ...nRules,
    ...stylisticRules
  }
} satisfies ESLint.ConfigData;

export default config;
