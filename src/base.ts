import type { ESLint, Linter } from 'eslint';
import eslintRules from './rules/eslint-rules.js';
import globals from 'globals';
// @ts-expect-error TS7016
import importPlugin from 'eslint-plugin-import';
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
    ecmaVersion: 2024,
    globals: {
      ...globals.es2023,
      ...globals.node
    },
    sourceType: 'module'
  },
  linterOptions: {
    reportUnusedDisableDirectives: 'error',
    reportUnusedInlineConfigs: 'error'
  },
  plugins: {
    '@stylistic': stylistic as ESLint.Plugin,
    import: importPlugin as ESLint.Plugin,
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
} as const satisfies Linter.Config;

export default config;
