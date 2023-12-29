'use strict';

class Tester {
  #expectedRules = [];

  #pluginNameSeparator = '/';

  constructor (expectedRules) {
    this.#expectedRules = expectedRules;
  }

  static #exclude (array, values) {
    return array.filter(item => !values.includes(item));
  }

  test (listed, pluginName) {
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

  #pickBy (rules, pluginName) {
    return rules.filter(key => {
      if (typeof pluginName === 'string') {
        return key.startsWith(`${pluginName}${this.#pluginNameSeparator}`);
      }
      return !key.includes(this.#pluginNameSeparator);
    });
  }
}

module.exports = Tester;
