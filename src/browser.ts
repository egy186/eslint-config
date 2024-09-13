import type { ESLint, Linter } from 'eslint';
// @ts-expect-error TS7016
import { flatConfigs } from 'eslint-plugin-import';
import globals from 'globals';

const config = {
  files: ['**/*.{js,jsx,mjs,cjs}', '**/*.{ts,tsx,mts,cts}'],
  languageOptions: {
    globals: {
      ...globals.browser
    }
  },
  plugins: {
    import: (flatConfigs as { recommended: { plugins: { import: ESLint.Plugin } } }).recommended.plugins.import
  },
  rules: {
    'import/no-nodejs-modules': 'error'
  }
} as const satisfies Linter.FlatConfig;

export default config;
