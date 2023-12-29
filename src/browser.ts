import type { ESLint } from 'eslint';
import node from './node.js';

const config = {
  env: {
    browser: true,
    node: false
  },
  // Disable all node rules
  rules: Object.fromEntries(Object.keys(node.rules).map(rule => [rule, 'off']))
} satisfies ESLint.ConfigData;

export default config;
