class Tester {
  readonly #expectedRules: ReadonlyArray<string> = [];

  readonly #pluginNameSeparator = '/';

  public constructor (expectedRules: ReadonlyArray<string>) {
    this.#expectedRules = expectedRules;
  }

  static #exclude <T>(array: ReadonlyArray<T>, values: ReadonlyArray<T>): ReadonlyArray<T> {
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

  #pickBy (rules: ReadonlyArray<string>, pluginName?: string): ReadonlyArray<string> {
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
