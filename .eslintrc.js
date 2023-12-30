'use strict';

const jiti = require('jiti')(__filename);

const index = jiti('./src/index.ts').default;
const typescript = jiti('./src/typescript.ts').default;

/** @type {import('eslint').ESLint.ConfigData} */
const config = {
  ...index,
  ignorePatterns: ['dist/**'],
  overrides: [
    {
      ...typescript,
      files: ['src/**/*', 'test/**/*'],
      parserOptions: {
        ...typescript.parserOptions,
        project: './tsconfig.base.json'
      },
      rules: {
        ...typescript.rules,
        '@typescript-eslint/naming-convention': [
          'error',
          {
            format: null,
            modifiers: ['requiresQuotes'],
            selector: 'property'
          },
          {
            format: ['camelCase'],
            selector: 'default'
          },
          {
            format: ['camelCase', 'PascalCase'],
            selector: 'import'
          },
          {
            format: ['camelCase', 'UPPER_CASE'],
            selector: 'variable'
          },
          {
            format: ['camelCase', 'snake_case'],
            leadingUnderscore: 'allow',
            selector: 'property'
          },
          {
            format: ['camelCase'],
            leadingUnderscore: 'allow',
            selector: 'parameter'
          },
          {
            format: ['camelCase'],
            leadingUnderscore: 'require',
            modifiers: ['private'],
            selector: 'memberLike'
          },
          {
            format: ['PascalCase'],
            selector: 'typeLike'
          }
        ]
      }
    },
    {
      files: [
        'browser.js',
        'commonjs.js',
        'index.js',
        'jest.js',
        'react.js',
        'typescript.js'
      ],
      reportUnusedDisableDirectives: false
    }
  ],
  parserOptions: { sourceType: 'script' },
  // Disable all import rules
  rules: Object.fromEntries(Object.entries(index.rules).filter(([name]) => !name.startsWith('import/')))
};

module.exports = config;
