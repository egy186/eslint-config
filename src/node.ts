import type { ESLint } from 'eslint';

const config = {
  env: { node: true },
  plugins: ['n'],
  rules: {
    'n/callback-return': 'error',
    'n/exports-style': 'error',
    'n/file-extension-in-import': 'error',
    'n/global-require': 'error',
    'n/handle-callback-err': ['error', '^(err|error)$'],
    'n/no-callback-literal': 'error',
    'n/no-deprecated-api': 'error',
    'n/no-exports-assign': 'error',
    'n/no-extraneous-import': 'error',
    'n/no-extraneous-require': 'error',
    'n/no-missing-import': 'error',
    'n/no-missing-require': 'error',
    'n/no-mixed-requires': 'error',
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
    'n/no-process-env': 'warn',
    'n/no-process-exit': 'warn',
    'n/no-restricted-import': 'off',
    'n/no-restricted-require': 'off',
    'n/no-sync': 'error',
    'n/no-unpublished-bin': 'error',
    'n/no-unpublished-import': 'error',
    'n/no-unpublished-require': 'error',
    'n/no-unsupported-features/es-builtins': 'error',
    'n/no-unsupported-features/es-syntax': 'error',
    'n/no-unsupported-features/node-builtins': 'error',
    'n/prefer-global/buffer': 'error',
    'n/prefer-global/console': 'error',
    'n/prefer-global/process': 'error',
    'n/prefer-global/text-decoder': 'error',
    'n/prefer-global/text-encoder': 'error',
    'n/prefer-global/url': 'error',
    'n/prefer-global/url-search-params': 'error',
    'n/prefer-promises/dns': 'error',
    'n/prefer-promises/fs': 'error',
    'n/process-exit-as-throw': 'error',
    'n/shebang': 'error'
  }
} satisfies ESLint.ConfigData;

export default config;