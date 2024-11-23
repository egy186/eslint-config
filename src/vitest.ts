import type { Linter } from 'eslint';
import vitest from '@vitest/eslint-plugin';

const config = {
  files: ['**/*.{spec,test}.{js,jsx,mjs,cjs}', '**/*.{spec,test}.{ts,tsx,mts,cts}'],
  plugins: { vitest },
  rules: {
    'max-lines-per-function': 'off',
    'max-statements': 'off',
    'n/no-unpublished-import': [
      'error',
      {
        allowModules: ['vitest']
      }
    ],
    'vitest/consistent-test-filename': 'error',
    'vitest/consistent-test-it': 'error',
    'vitest/expect-expect': 'error',
    'vitest/max-expects': 'error',
    'vitest/max-nested-describe': 'error',
    'vitest/no-alias-methods': 'error',
    'vitest/no-commented-out-tests': 'error',
    'vitest/no-conditional-expect': 'error',
    'vitest/no-conditional-in-test': 'error',
    'vitest/no-conditional-tests': 'error',
    'vitest/no-disabled-tests': 'error',
    'vitest/no-duplicate-hooks': 'error',
    'vitest/no-focused-tests': 'error',
    'vitest/no-hooks': 'off',
    'vitest/no-identical-title': 'error',
    'vitest/no-import-node-test': 'error',
    'vitest/no-interpolation-in-snapshots': 'error',
    'vitest/no-large-snapshots': 'error',
    'vitest/no-mocks-import': 'error',
    'vitest/no-restricted-matchers': 'error',
    'vitest/no-restricted-vi-methods': 'error',
    'vitest/no-standalone-expect': 'error',
    'vitest/no-test-prefixes': 'error',
    'vitest/no-test-return-statement': 'error',
    'vitest/padding-around-after-all-blocks': 'error',
    'vitest/padding-around-after-each-blocks': 'error',
    'vitest/padding-around-all': 'error',
    'vitest/padding-around-before-all-blocks': 'error',
    'vitest/padding-around-before-each-blocks': 'error',
    'vitest/padding-around-describe-blocks': 'error',
    'vitest/padding-around-expect-groups': 'error',
    'vitest/padding-around-test-blocks': 'error',
    'vitest/prefer-called-with': 'error',
    'vitest/prefer-comparison-matcher': 'error',
    'vitest/prefer-each': 'error',
    'vitest/prefer-equality-matcher': 'error',
    'vitest/prefer-expect-assertions': ['error', { onlyFunctionsWithAsyncKeyword: true }],
    'vitest/prefer-expect-resolves': 'error',
    'vitest/prefer-hooks-in-order': 'error',
    'vitest/prefer-hooks-on-top': 'error',
    'vitest/prefer-lowercase-title': 'error',
    'vitest/prefer-mock-promise-shorthand': 'error',
    'vitest/prefer-snapshot-hint': 'error',
    'vitest/prefer-spy-on': 'error',
    'vitest/prefer-strict-equal': 'error',
    'vitest/prefer-to-be': 'error',
    'vitest/prefer-to-be-falsy': 'off',
    'vitest/prefer-to-be-object': 'error',
    'vitest/prefer-to-be-truthy': 'off',
    'vitest/prefer-to-contain': 'error',
    'vitest/prefer-to-have-length': 'error',
    'vitest/prefer-todo': 'error',
    'vitest/prefer-vi-mocked': 'error',
    'vitest/require-hook': 'error',
    'vitest/require-local-test-context-for-concurrent-snapshots': 'error',
    'vitest/require-to-throw-message': 'error',
    'vitest/require-top-level-describe': 'error',
    'vitest/valid-describe-callback': 'error',
    'vitest/valid-expect': 'error',
    'vitest/valid-expect-in-promise': 'error',
    'vitest/valid-title': 'error'
  }
} as const satisfies Linter.Config;

export { config as vitest };

export default config;