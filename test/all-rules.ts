import type { RuleInfo } from '@eslint-stylistic/metadata';
import eslint from '@eslint/js';
// @ts-expect-error TS7016
import { rules as importPluginRules } from 'eslint-plugin-import';
import jestPlugin from 'eslint-plugin-jest';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import nPlugin from 'eslint-plugin-n';
// @ts-expect-error TS7016
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactPlugin from 'eslint-plugin-react';
import { rules as stylisticPluginRules } from '@eslint-stylistic/metadata';
import { plugin as typescriptPlugin } from 'typescript-eslint';

interface Rule {
  readonly meta?: Readonly<object>;
}

interface Rules {
  readonly [key: string]: Rule;
}

interface Plugin {
  readonly rules: Rules;
}

const ruleIsDeprecated = (rule: Rule): boolean => {
  const meta = rule.meta ?? {};
  return 'deprecated' in meta ? meta.deprecated === true : false;
};

const rulesToRuleNames = (rules: Rules, pluginName?: string): readonly string[] => [...Object.entries(rules)]
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  .filter(([, rule]) => !ruleIsDeprecated(rule))
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  .map(([name]) => {
    if (typeof pluginName === 'string') {
      return `${pluginName}/${name}`;
    }
    return name;
  });

const eslintRules = Object.keys(eslint.configs.all.rules as { [name: string]: unknown });
const importRules = rulesToRuleNames(importPluginRules as Rules, 'import');
const jestRules = rulesToRuleNames(jestPlugin.rules, 'jest');
const jsdocRules = rulesToRuleNames((jsdocPlugin as Plugin).rules, 'jsdoc');
const nRules = rulesToRuleNames((nPlugin as Plugin).rules, 'n');
const reactHooksRules = rulesToRuleNames((reactHooksPlugin as Plugin).rules, 'react-hooks');
const reactRules = rulesToRuleNames((reactPlugin as unknown as Plugin).rules, 'react');
// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const stylisticRules = rulesToRuleNames(Object.fromEntries(stylisticPluginRules.map((rule: RuleInfo) => [rule.name, rule])), '@stylistic');
const typescriptRules = rulesToRuleNames(typescriptPlugin.rules as Rules, '@typescript-eslint');

const allRules = [
  ...eslintRules,
  ...importRules,
  ...jestRules,
  ...jsdocRules,
  ...nRules,
  ...reactHooksRules,
  ...reactRules,
  ...stylisticRules,
  ...typescriptRules
];

export { allRules };

export default allRules;
