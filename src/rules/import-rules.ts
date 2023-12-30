import type { ESLint } from 'eslint';

const rules = {
  'import/consistent-type-specifier-style': 'error',
  'import/default': 'error',
  'import/dynamic-import-chunkname': 'error',
  'import/export': 'error',
  'import/exports-last': 'error',
  'import/extensions': 'error',
  'import/first': 'error',
  'import/group-exports': 'error',
  'import/max-dependencies': 'error',
  'import/named': 'error',
  'import/namespace': 'error',
  'import/newline-after-import': 'error',
  'import/no-absolute-path': 'error',
  'import/no-amd': 'error',
  'import/no-anonymous-default-export': 'error',
  'import/no-commonjs': 'error',
  'import/no-cycle': 'error',
  'import/no-default-export': 'off',
  'import/no-deprecated': 'error',
  'import/no-duplicates': 'error',
  'import/no-dynamic-require': 'error',
  'import/no-empty-named-blocks': 'error',
  'import/no-extraneous-dependencies': 'off',
  'import/no-import-module-exports': 'error',
  'import/no-internal-modules': 'off',
  'import/no-mutable-exports': 'error',
  'import/no-named-as-default': 'error',
  'import/no-named-as-default-member': 'error',
  'import/no-named-default': 'error',
  'import/no-named-export': 'off',
  'import/no-namespace': 'error',
  'import/no-nodejs-modules': 'off',
  'import/no-relative-packages': 'error',
  'import/no-relative-parent-imports': 'off',
  'import/no-restricted-paths': 'off',
  'import/no-self-import': 'error',
  'import/no-unassigned-import': 'error',
  'import/no-unresolved': 'error',
  'import/no-unused-modules': 'error',
  'import/no-useless-path-segments': 'error',
  'import/no-webpack-loader-syntax': 'error',
  'import/order': 'off',
  'import/prefer-default-export': 'error',
  'import/unambiguous': 'error',
  'no-duplicate-imports': 'off'
} satisfies ESLint.ConfigData['rules'];

export default rules;