import { createNodeResolver, importX } from 'eslint-plugin-import-x';
import type { Linter } from 'eslint';
import eslintRules from './rules/eslint-rules.js';
import globals from 'globals';
import importXRules from './rules/import-x-rules.js';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import jsdocRules from './rules/jsdoc-rules.js';
import nPlugin from 'eslint-plugin-n';
import nRules from './rules/n-rules.js';
import stylistic from '@stylistic/eslint-plugin';
// eslint-disable-next-line import-x/max-dependencies
import stylisticRules from './rules/stylistic-rules.js';

const config = {
  files: ['**/*.{js,jsx,mjs}', '**/*.{ts,tsx,mts}'],
  languageOptions: {
    ecmaVersion: 2025,
    globals: {
      ...globals.es2025,
      ...globals.node
    },
    sourceType: 'module'
  },
  linterOptions: {
    reportUnusedDisableDirectives: 'error',
    reportUnusedInlineConfigs: 'error'
  },
  plugins: {
    '@stylistic': stylistic,
    'import-x': importX,
    jsdoc: jsdocPlugin,
    n: nPlugin
  },
  rules: {
    ...eslintRules,
    ...importXRules,
    ...jsdocRules,
    ...nRules,
    ...stylisticRules
  },
  settings: {
    'import-x/extensions': [
      '.js',
      '.mjs',
      '.cjs'
    ],
    'import-x/resolver-next': [createNodeResolver()]
  }
} as const satisfies Linter.Config;

export default config;
