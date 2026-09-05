import type { Linter } from 'eslint';
import { react } from './react.js';

const config = {
  ...react,
  rules: {
    ...react.rules,
    '@typescript-eslint/naming-convention': [
      'error',
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
      },
      {
        format: ['PascalCase', 'camelCase'],
        selector: ['variable'],
        types: ['function']
      }
    ]
  },
  settings: {
    'import-x/extensions': [
      '.ts',
      '.tsx',
      '.cts',
      '.mts',
      '.js',
      '.jsx',
      '.cjs',
      '.mjs'
    ],
    n: {
      typescriptExtensionMap: [
        ['.ts', '.js'],
        ['.mts', '.mjs'],
        ['.tsx', '.js']
      ]
    }
  }
} as const satisfies Linter.Config;

export { config as typescriptReact };

export default config;
