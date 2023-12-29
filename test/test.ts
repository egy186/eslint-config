import { Tester } from './tester.js';
import { allRules } from './all-rules.js';

// My rules
import eslintRules from '../src/rules/eslint-rules.js';
import importRules from '../src/rules/import-rules.js';
import jest from '../src/jest.js';
import jsdocRules from '../src/rules/jsdoc-rules.js';
import nRules from '../src/rules/n-rules.js';
import react from '../src/react.js';
import stylisticRules from '../src/rules/stylistic-rules.js';
import typeScript from '../src/typescript.js';

// Test
const tester = new Tester(allRules);

const pass = [
  tester.test(eslintRules),
  tester.test(jest.rules, 'jest'),
  tester.test(jsdocRules, 'jsdoc'),
  tester.test(importRules, 'import'),
  tester.test(nRules, 'n'),
  tester.test(react.rules, 'react-hooks'),
  tester.test(react.rules, 'react'),
  tester.test(stylisticRules, '@stylistic'),
  tester.test(typeScript.rules, '@typescript-eslint')
].every(isOk => isOk);

process.exitCode = pass ? 0 : 1;
