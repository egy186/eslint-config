import type { Linter } from 'eslint';
import globals from 'globals';
import jest from 'eslint-plugin-jest';

const config = {
  files: ['**/*.{spec,test}.{js,jsx,mjs,cjs}', '**/*.{spec,test}.{ts,tsx,mts,cts}'],
  languageOptions: {
    globals: {
      ...globals.jest
    }
  },
  plugins: { jest },
  rules: {
    'jest/consistent-test-it': 'error',
    'jest/expect-expect': 'error',
    'jest/max-expects': 'error',
    'jest/max-nested-describe': 'error',
    'jest/no-alias-methods': 'error',
    'jest/no-commented-out-tests': 'error',
    'jest/no-conditional-expect': 'error',
    'jest/no-conditional-in-test': 'error',
    'jest/no-confusing-set-timeout': 'error',
    'jest/no-deprecated-functions': 'error',
    'jest/no-disabled-tests': 'error',
    'jest/no-done-callback': 'error',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-export': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-hooks': 'off',
    'jest/no-identical-title': 'error',
    'jest/no-interpolation-in-snapshots': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/no-large-snapshots': 'warn',
    'jest/no-mocks-import': 'error',
    'jest/no-restricted-jest-methods': 'off',
    'jest/no-restricted-matchers': 'off',
    'jest/no-standalone-expect': 'error',
    'jest/no-test-prefixes': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/no-untyped-mock-factory': 'warn',
    'jest/padding-around-after-all-blocks': 'error',
    'jest/padding-around-after-each-blocks': 'error',
    'jest/padding-around-all': 'error',
    'jest/padding-around-before-all-blocks': 'error',
    'jest/padding-around-before-each-blocks': 'error',
    'jest/padding-around-describe-blocks': 'error',
    'jest/padding-around-expect-groups': 'error',
    'jest/padding-around-test-blocks': 'error',
    'jest/prefer-called-with': 'error',
    'jest/prefer-comparison-matcher': 'error',
    'jest/prefer-each': 'error',
    'jest/prefer-equality-matcher': 'error',
    'jest/prefer-expect-assertions': ['warn', { onlyFunctionsWithAsyncKeyword: true }],
    'jest/prefer-expect-resolves': 'error',
    'jest/prefer-hooks-in-order': 'error',
    'jest/prefer-hooks-on-top': 'error',
    'jest/prefer-importing-jest-globals': 'off',
    'jest/prefer-jest-mocked': 'error',
    'jest/prefer-lowercase-title': 'error',
    'jest/prefer-mock-promise-shorthand': 'error',
    'jest/prefer-snapshot-hint': 'error',
    'jest/prefer-spy-on': 'error',
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-to-be': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/prefer-todo': 'error',
    'jest/require-hook': 'error',
    'jest/require-to-throw-message': 'error',
    'jest/require-top-level-describe': 'error',
    'jest/unbound-method': 'error',
    'jest/valid-describe-callback': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-title': 'error',
    'max-lines-per-function': 'off',
    'max-statements': 'off'
  }
} as const satisfies Linter.Config;

export { config as jest };

export default config;
