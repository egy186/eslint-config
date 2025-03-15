import type { RuleInfo } from '@eslint-stylistic/metadata';
import eslint from '@eslint/js';
// @ts-expect-error TS7016
import { rules as importPluginRules } from 'eslint-plugin-import';
import jestPlugin from 'eslint-plugin-jest';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import nPlugin from 'eslint-plugin-n';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactPlugin from 'eslint-plugin-react';
import { rules as stylisticPluginRules } from '@eslint-stylistic/metadata';
import { plugin as typescriptPlugin } from 'typescript-eslint';
import vitestPlugin from '@vitest/eslint-plugin';

interface Rule {
  readonly meta?: Readonly<object>;
}

interface Rules {
  readonly [key: string]: Rule;
}

const ruleIsDeprecated = (rule: Rule): boolean => {
  const meta = rule.meta ?? {};
  return 'deprecated' in meta ? meta.deprecated === true : false;
};

const rulesToRuleNames = (rules: Rules, pluginName?: string): ReadonlyArray<string> => [...Object.entries(rules)]
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  .filter(([, rule]) => !ruleIsDeprecated(rule))
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  .map(([name]) => {
    if (typeof pluginName === 'string') {
      return `${pluginName}/${name}`;
    }
    return name;
  });

const eslintRules = Object.keys(eslint.configs.all.rules);
const importRules = rulesToRuleNames(importPluginRules as Rules, 'import');
const jestRules = rulesToRuleNames(jestPlugin.rules, 'jest');
const jsdocRules = rulesToRuleNames(jsdocPlugin.rules ?? {}, 'jsdoc');
const nRules = rulesToRuleNames(nPlugin.rules ?? {}, 'n');
const reactHooksRules = rulesToRuleNames(reactHooksPlugin.rules, 'react-hooks');
const reactRules = rulesToRuleNames(reactPlugin.rules, 'react');
// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const stylisticRules = rulesToRuleNames(Object.fromEntries(stylisticPluginRules.map((rule: RuleInfo) => [rule.name, rule])), '@stylistic');
const typescriptRules = rulesToRuleNames(typescriptPlugin.rules as Rules, '@typescript-eslint');
const vitestRules = rulesToRuleNames(vitestPlugin.rules, 'vitest');

const allRules = [
  ...eslintRules,
  ...importRules,
  ...jestRules,
  ...jsdocRules,
  ...nRules,
  ...reactHooksRules,
  ...reactRules,
  ...stylisticRules,
  ...typescriptRules,
  ...vitestRules
];

export { allRules };

export default allRules;
