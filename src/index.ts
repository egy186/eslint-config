import type { ESLint } from 'eslint';
import baseRules from './lib/base-rules.js';
import jsdocRules from './lib/jsdoc-rules.js';
import stylisticRules from './lib/stylistic-rules.js';

const config = {
  env: { es2022: true },
  plugins: ['jsdoc', '@stylistic'],
  reportUnusedDisableDirectives: true,
  rules: {
    ...baseRules,
    ...jsdocRules,
    ...stylisticRules
  }
} satisfies ESLint.ConfigData;

export default config;
