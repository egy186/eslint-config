import { Tester } from './tester.js';
import { allRules } from './all-rules.js';

// My rules
import baseRules from '../src/lib/base-rules.js';
import jest from '../src/jest.js';
import jsdocRules from '../src/lib/jsdoc-rules.js';
import modules from '../src/modules.js';
import node from '../src/node.js';
import react from '../src/react.js';
import stylisticRules from '../src/lib/stylistic-rules.js';
import typeScript from '../src/typescript.js';

// Test
const tester = new Tester(allRules);

const pass = [
  tester.test(baseRules),
  tester.test(jest.rules, 'jest'),
  tester.test(jsdocRules, 'jsdoc'),
  tester.test(modules.rules, 'import'),
  tester.test(node.rules, 'n'),
  tester.test(react.rules, 'react-hooks'),
  tester.test(react.rules, 'react'),
  tester.test(stylisticRules, '@stylistic'),
  tester.test(typeScript.rules, '@typescript-eslint')
].every(isOk => isOk);

process.exitCode = pass ? 0 : 1;
