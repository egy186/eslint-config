'use strict';

const deleteDeprecated = rules => {
  Object.keys(rules)
    .forEach(key => {
      if (rules[key].meta.deprecated) {
        delete rules[key];
      }
    });
};

module.exports = deleteDeprecated;
