import type { Linter } from 'eslint';
import base from './base.js';
import globals from 'globals';

const config = {
  ...base,
  languageOptions: {
    ...base.languageOptions,
    globals: {
      ...globals.es2023,
      ...globals.browser
    }
  },
  rules: {
    ...base.rules,
    'import/no-nodejs-modules': 'error',
    'n/no-unsupported-features/es-builtins': 'off',
    'n/no-unsupported-features/es-syntax': 'off',
    'n/no-unsupported-features/node-builtins': 'off'
  }
} as const satisfies Linter.Config;

export default config;
