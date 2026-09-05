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
  .filter(([, rule]: readonly [string, Rule]) => !ruleIsDeprecated(rule))
  .map(([name]: readonly [string, Rule]) => {
    if (typeof pluginName === 'string') {
      return `${pluginName}/${name}`;
    }
    return name;
  });

export type { Rule, Rules };

export { ruleIsDeprecated, rulesToRuleNames };

export default rulesToRuleNames;
