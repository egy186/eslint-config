import type { ESLint, Linter } from 'eslint';
import eslintRules from './rules/eslint-rules.js';
// @ts-expect-error TS7016
import { flatConfigs } from 'eslint-plugin-import';
import globals from 'globals';
import importRules from './rules/import-rules.js';
import jsdoc from 'eslint-plugin-jsdoc';
import jsdocRules from './rules/jsdoc-rules.js';
import nPlugin from 'eslint-plugin-n';
import nRules from './rules/n-rules.js';
import stylistic from '@stylistic/eslint-plugin';
// eslint-disable-next-line import/max-dependencies
import stylisticRules from './rules/stylistic-rules.js';

const config = {
  files: ['**/*.{js,jsx,mjs}', '**/*.{ts,tsx,mts}'],
  languageOptions: {
    globals: {
      ...globals.es2023,
      ...globals.node
    },
    parserOptions: {
      ecmaVersion: 2023
    },
    sourceType: 'module'
  },
  linterOptions: {
    reportUnusedDisableDirectives: 'error'
  },
  plugins: {
    '@stylistic': stylistic as ESLint.Plugin,
    import: (flatConfigs as { recommended: { plugins: { import: ESLint.Plugin } } }).recommended.plugins.import,
    jsdoc,
    n: nPlugin
  },
  rules: {
    ...eslintRules,
    ...importRules,
    ...jsdocRules,
    ...nRules,
    ...stylisticRules
  },
  settings: {
    'import/parsers': {
      espree: [
        '.js',
        '.jsx',
        '.mjs',
        '.cjs'
      ]
    },
    'import/resolver': { node: true }
  }
} as const satisfies Linter.FlatConfig;

export default config;
