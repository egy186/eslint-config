interface Rule {
  readonly meta?: Readonly<object>;
}
interface Rules {
  readonly [key: string]: Rule;
}

const ruleIsDeprecated = (rule: Rule): boolean => {
  const meta = rule.meta ?? {};
  return 'deprecated' in meta ? meta.deprecated !== false : false;
};

const rulesToRuleNames = (rules?: Rules, pluginName?: string): ReadonlyArray<string> => [...Object.entries(rules ?? {})]
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  .filter(([, rule]) => !ruleIsDeprecated(rule))
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  .map(([name]) => {
    if (typeof pluginName === 'string') {
      return `${pluginName}/${name}`;
    }
    return name;
  });

export type { Rule, Rules };

export { ruleIsDeprecated, rulesToRuleNames };

export default rulesToRuleNames;
