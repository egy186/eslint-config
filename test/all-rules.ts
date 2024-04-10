import type { RuleInfo } from '@eslint-stylistic/metadata';
import eslint from 'eslint/use-at-your-own-risk';
// @ts-expect-error TS7016
// eslint-disable-next-line sort-imports
import * as importPlugin from 'eslint-plugin-import';
// @ts-expect-error TS7016
import jestPlugin from 'eslint-plugin-jest';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import nPlugin from 'eslint-plugin-n';
// @ts-expect-error TS7016
import reactHooksPlugin from 'eslint-plugin-react-hooks';
// @ts-expect-error TS7016
import reactPlugin from 'eslint-plugin-react';
import stylisticPluginMetadata from '@eslint-stylistic/metadata';
import typeScriptPlugin from '@typescript-eslint/eslint-plugin';

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

const eslintRules = rulesToRuleNames(Object.fromEntries(eslint.builtinRules));
const importRules = rulesToRuleNames((importPlugin as Plugin).rules, 'import');
const jestRules = rulesToRuleNames((jestPlugin as Plugin).rules, 'jest');
const jsdocRules = rulesToRuleNames((jsdocPlugin as Plugin).rules, 'jsdoc');
const nRules = rulesToRuleNames((nPlugin as Plugin).rules, 'n');
const reactHooksRules = rulesToRuleNames((reactHooksPlugin as Plugin).rules, 'react-hooks');
const reactRules = rulesToRuleNames((reactPlugin as Plugin).rules, 'react');
// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const stylisticRules = rulesToRuleNames(Object.fromEntries(stylisticPluginMetadata.rules.map((rule: RuleInfo) => [rule.name, rule])), '@stylistic');
const typeScriptRules = rulesToRuleNames(typeScriptPlugin.rules, '@typescript-eslint');

const allRules = [
  ...eslintRules,
  ...importRules,
  ...jestRules,
  ...jsdocRules,
  ...nRules,
  ...reactHooksRules,
  ...reactRules,
  ...stylisticRules,
  ...typeScriptRules
];

export { allRules };

export default allRules;
