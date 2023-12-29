class Tester {
  readonly #expectedRules: readonly string[] = [];

  readonly #pluginNameSeparator = '/';

  public constructor (expectedRules: readonly string[]) {
    this.#expectedRules = expectedRules;
  }

  static #exclude <T>(array: readonly T[], values: readonly T[]): readonly T[] {
    return array.filter(item => !values.includes(item));
  }

  public test (listed: Readonly<{ readonly [key: string]: unknown }>, pluginName?: string): boolean {
    const listedKeys = this.#pickBy(Object.keys(listed), pluginName);
    const expectedKeys = this.#pickBy(this.#expectedRules, pluginName);

    // Missing rules
    const missing = Tester.#exclude(expectedKeys, listedKeys);
    missing.forEach(rule => {
      // eslint-disable-next-line no-console
      console.log('Missing rule:', rule);
    });

    // Extra rules
    const extra = Tester.#exclude(listedKeys, expectedKeys);
    extra.forEach(rule => {
      // eslint-disable-next-line no-console
      console.log('Unknown rule:', rule);
    });

    const pass = missing.length === 0 && extra.length === 0;
    return pass;
  }

  #pickBy (rules: readonly string[], pluginName?: string): readonly string[] {
    return rules.filter(key => {
      if (typeof pluginName === 'string') {
        return key.startsWith(`${pluginName}${this.#pluginNameSeparator}`);
      }
      return !key.includes(this.#pluginNameSeparator);
    });
  }
}

export { Tester };

export default Tester;
