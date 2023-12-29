import type { ESLint } from 'eslint';
import nodeRules from './rules/n-rules.js';

const config = {
  env: {
    browser: true,
    node: false
  },
  // Disable all node rules
  rules: Object.fromEntries(Object.keys(nodeRules).map(rule => [rule, 'off']))
} satisfies ESLint.ConfigData;

export default config;
