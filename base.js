'use strict';

/* eslint max-lines: "off" */

module.exports = {
  env: { es2017: true },
  parserOptions: { ecmaVersion: 2018 },
  reportUnusedDisableDirectives: true,
  rules: {
    ...{
      // Possible Errors
      'for-direction': 'error',
      'getter-return': 'error',
      'no-async-promise-executor': 'error',
      'no-await-in-loop': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': ['error', 'always'],
      'no-console': 'warn',
      'no-constant-condition': 'error',
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-dupe-args': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-empty': 'error',
      'no-empty-character-class': 'error',
      'no-ex-assign': 'error',
      'no-extra-boolean-cast': 'error',
      'no-extra-parens': [
        'error',
        'all',
        {
          ignoreJSX: 'multi-line',
          nestedBinaryExpressions: false
        }
      ],
      'no-extra-semi': 'error',
      'no-func-assign': 'error',
      'no-import-assign': 'error',
      'no-inner-declarations': 'error',
      'no-invalid-regexp': 'error',
      'no-irregular-whitespace': 'error',
      'no-loss-of-precision': 'error',
      'no-misleading-character-class': 'error',
      'no-obj-calls': 'error',
      'no-prototype-builtins': 'error',
      'no-regex-spaces': 'error',
      'no-setter-return': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-unexpected-multiline': 'error',
      'no-unreachable': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'no-useless-backreference': 'error',
      'require-atomic-updates': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'error'
    },
    ...{
      // Best Practices
      'accessor-pairs': 'error',
      'array-callback-return': ['error', { checkForEach: true }],
      'block-scoped-var': 'error',
      'class-methods-use-this': 'error',
      complexity: ['warn', 12],
      'consistent-return': 'error',
      curly: ['error', 'all'],
      'default-case': 'error',
      'default-case-last': 'error',
      'default-param-last': 'error',
      'dot-location': ['error', 'property'],
      'dot-notation': 'error',
      eqeqeq: 'error',
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      'guard-for-in': 'error',
      'max-classes-per-file': 'error',
      'no-alert': 'error',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-constructor-return': 'error',
      'no-div-regex': 'error',
      'no-else-return': 'error',
      'no-empty-function': 'error',
      'no-empty-pattern': 'error',
      'no-eq-null': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'off',
      'no-fallthrough': 'error',
      'no-floating-decimal': 'error',
      'no-global-assign': 'error',
      'no-implicit-coercion': 'error',
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error',
      'no-invalid-this': 'error',
      'no-iterator': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-loop-func': 'error',
      'no-magic-numbers': 'off',
      'no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-octal': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': ['error', { props: false }],
      'no-proto': 'error',
      'no-redeclare': 'error',
      'no-restricted-properties': 'off',
      'no-return-assign': 'error',
      'no-return-await': 'error',
      'no-script-url': 'error',
      'no-self-assign': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unused-expressions': 'error',
      'no-unused-labels': 'off',
      'no-useless-call': 'error',
      'no-useless-catch': 'error',
      'no-useless-concat': 'error',
      'no-useless-escape': 'error',
      'no-useless-return': 'error',
      'no-void': 'error',
      'no-warning-comments': 'error',
      'no-with': 'error',
      'prefer-named-capture-group': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-regex-literals': 'error',
      radix: 'error',
      'require-await': 'error',
      'require-unicode-regexp': 'error',
      'vars-on-top': 'error',
      'wrap-iife': ['error', 'inside'],
      yoda: 'error'
    },
    ...{
      // Strict Mode
      strict: ['error', 'safe']
    },
    ...{
      // Variables
      'init-declarations': 'error',
      'no-delete-var': 'error',
      'no-label-var': 'off',
      'no-restricted-globals': 'off',
      'no-shadow': 'error',
      'no-shadow-restricted-names': 'error',
      'no-undef': 'error',
      'no-undef-init': 'error',
      'no-undefined': 'off',
      'no-unused-vars': [
        'error',
        {
          args: 'after-used',
          caughtErrors: 'all',
          vars: 'all'
        }
      ],
      'no-use-before-define': 'error'
    },
    ...{
      // Stylistic Issues
      'array-bracket-newline': 'error',
      'array-bracket-spacing': ['error', 'never'],
      'array-element-newline': [
        'error',
        {
          minItems: 3,
          multiline: true
        }
      ],
      'block-spacing': ['error', 'always'],
      'brace-style': [
        'error',
        '1tbs',
        { allowSingleLine: false }
      ],
      camelcase: ['error', { properties: 'never' }],
      'capitalized-comments': 'error',
      'comma-dangle': ['error', 'never'],
      'comma-spacing': [
        'error',
        {
          after: true,
          before: false
        }
      ],
      'comma-style': ['error', 'last'],
      'computed-property-spacing': ['error', 'never'],
      'consistent-this': 'off',
      'eol-last': 'error',
      'func-call-spacing': ['error', 'never'],
      'func-name-matching': 'error',
      'func-names': ['error', 'as-needed'],
      'func-style': ['error', 'expression'],
      'function-call-argument-newline': ['error', 'consistent'],
      'function-paren-newline': ['error', 'multiline'],
      'id-blacklist': 'off',
      'id-length': 'off',
      'id-match': 'off',
      'implicit-arrow-linebreak': ['error', 'beside'],
      indent: [
        'error',
        2,
        {
          MemberExpression: 1,
          SwitchCase: 1
        }
      ],
      'jsx-quotes': ['error', 'prefer-double'],
      'key-spacing': [
        'error',
        {
          afterColon: true,
          beforeColon: false
        }
      ],
      'keyword-spacing': [
        'error',
        {
          after: true,
          before: true
        }
      ],
      'line-comment-position': 'off',
      'linebreak-style': 'error',
      'lines-around-comment': 'off',
      'lines-between-class-members': 'error',
      'max-depth': 'error',
      'max-len': 'off',
      'max-lines': 'warn',
      'max-lines-per-function': 'warn',
      'max-nested-callbacks': 'error',
      'max-params': 'off',
      'max-statements': 'warn',
      'max-statements-per-line': 'error',
      'multiline-comment-style': 'error',
      'multiline-ternary': ['error', 'always-multiline'],
      'new-cap': 'error',
      'new-parens': 'error',
      'newline-per-chained-call': 'off',
      'no-array-constructor': 'error',
      'no-bitwise': 'off',
      'no-continue': 'off',
      'no-inline-comments': 'off',
      'no-lonely-if': 'error',
      'no-mixed-operators': 'error',
      'no-mixed-spaces-and-tabs': 'error',
      'no-multi-assign': 'error',
      'no-multiple-empty-lines': [
        'error',
        {
          max: 2,
          maxBOF: 0,
          maxEOF: 1
        }
      ],
      'no-negated-condition': 'error',
      'no-nested-ternary': 'error',
      'no-new-object': 'error',
      'no-plusplus': 'off',
      'no-restricted-syntax': 'off',
      'no-tabs': 'off',
      'no-ternary': 'off',
      'no-trailing-spaces': 'error',
      'no-underscore-dangle': ['error', { allowAfterThis: true }],
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-whitespace-before-property': 'error',
      'nonblock-statement-body-position': 'error',
      'object-curly-newline': ['error', { multiline: true }],
      'object-curly-spacing': ['error', 'always'],
      'object-property-newline': 'error',
      'one-var': ['error', 'never'],
      'one-var-declaration-per-line': 'off',
      'operator-assignment': 'off',
      'operator-linebreak': ['error', 'before'],
      'padded-blocks': ['error', 'never'],
      'padding-line-between-statements': 'error',
      'prefer-exponentiation-operator': 'error',
      'prefer-object-spread': 'error',
      'quote-props': ['error', 'as-needed'],
      quotes: [
        'error',
        'single',
        'avoid-escape'
      ],
      semi: ['error', 'always'],
      'semi-spacing': [
        'error',
        {
          after: true,
          before: false
        }
      ],
      'semi-style': ['error', 'last'],
      'sort-keys': 'error',
      'sort-vars': 'error',
      'space-before-blocks': 'error',
      'space-before-function-paren': ['error', 'always'],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'space-unary-ops': 'error',
      'spaced-comment': [
        'error',
        'always',
        { block: { balanced: true } }
      ],
      'switch-colon-spacing': 'error',
      'template-tag-spacing': ['error', 'never'],
      'unicode-bom': ['error', 'never'],
      'wrap-regex': 'off'
    },
    ...{
      // ECMAScript 6
      'arrow-body-style': ['error', 'as-needed'],
      'arrow-parens': ['error', 'as-needed'],
      'arrow-spacing': [
        'error',
        {
          after: true,
          before: true
        }
      ],
      'constructor-super': 'error',
      'generator-star-spacing': ['error', 'after'],
      'no-class-assign': 'error',
      'no-confusing-arrow': ['error', { allowParens: false }],
      'no-const-assign': 'error',
      'no-dupe-class-members': 'error',
      'no-duplicate-imports': 'error',
      'no-new-symbol': 'error',
      'no-restricted-exports': 'off',
      'no-restricted-imports': 'off',
      'no-this-before-super': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      'no-var': 'error',
      'object-shorthand': ['error', 'always'],
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-destructuring': 'error',
      'prefer-numeric-literals': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'require-yield': 'error',
      'rest-spread-spacing': ['error', 'never'],
      'sort-imports': 'error',
      'symbol-description': 'error',
      'template-curly-spacing': ['error', 'never'],
      'yield-star-spacing': [
        'error',
        {
          after: true,
          before: false
        }
      ]
    }
  }
};
