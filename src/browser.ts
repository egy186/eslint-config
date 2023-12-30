import type { ESLint } from 'eslint';
import nodeRules from './rules/n-rules.js';

const config = {
  env: {
    browser: true,
    node: false
  },
  rules: {
    // Disable all node rules
    ...Object.fromEntries(Object.keys(nodeRules).map(rule => [rule, 'off'])),
    'import/no-nodejs-modules': 'error'
  }
} satisfies ESLint.ConfigData;

export default config;
