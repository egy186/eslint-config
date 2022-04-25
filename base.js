'use strict';

/* eslint max-lines: "off" */

module.exports = {
  env: { es2020: true },
  reportUnusedDisableDirectives: true,
  rules: {
    ...{
      // Possible Problems
      'array-callback-return': ['error', { checkForEach: true }],
      'constructor-super': 'error',
      'for-direction': 'error',
      'getter-return': 'error',
      'no-async-promise-executor': 'error',
      'no-await-in-loop': 'error',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': ['error', 'always'],
      'no-const-assign': 'error',
      'no-constant-binary-expression': 'error',
      'no-constant-condition': 'error',
      'no-constructor-return': 'error',
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-empty-character-class': 'error',
      'no-empty-pattern': 'error',
      'no-ex-assign': 'error',
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-import-assign': 'error',
      'no-inner-declarations': 'error',
      'no-invalid-regexp': 'error',
      'no-irregular-whitespace': 'error',
      'no-loss-of-precision': 'error',
      'no-misleading-character-class': 'error',
      'no-new-symbol': 'error',
      'no-obj-calls': 'error',
      'no-promise-executor-return': 'error',
      'no-prototype-builtins': 'error',
      'no-self-assign': 'error',
      'no-self-compare': 'error',
      'no-setter-return': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-this-before-super': 'error',
      'no-undef': 'error',
      'no-unexpected-multiline': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable': 'error',
      'no-unreachable-loop': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
      'no-unused-private-class-members': 'error',
      'no-unused-vars': [
        'error',
        {
          args: 'after-used',
          caughtErrors: 'all',
          vars: 'all'
        }
      ],
      'no-use-before-define': 'error',
      'no-useless-backreference': 'error',
      'require-atomic-updates': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'error'
    },
    ...{
      // Suggestions
      'accessor-pairs': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'block-scoped-var': 'error',
      camelcase: ['error', { properties: 'never' }],
      'capitalized-comments': 'error',
      'class-methods-use-this': 'error',
      complexity: ['warn', 12],
      'consistent-return': 'error',
      'consistent-this': 'error',
      curly: ['error', 'all'],
      'default-case': 'error',
      'default-case-last': 'error',
      'default-param-last': 'error',
      'dot-notation': 'error',
      eqeqeq: 'error',
      'func-name-matching': 'error',
      'func-names': ['error', 'as-needed'],
      'func-style': ['error', 'expression'],
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      'guard-for-in': 'error',
      'id-denylist': 'off',
      'id-length': 'off',
      'id-match': 'off',
      'init-declarations': 'error',
      'max-classes-per-file': 'error',
      'max-depth': 'error',
      'max-lines': 'warn',
      'max-lines-per-function': 'warn',
      'max-nested-callbacks': 'error',
      'max-params': 'off',
      'max-statements': 'warn',
      'multiline-comment-style': 'error',
      'new-cap': 'error',
      'no-alert': 'error',
      'no-array-constructor': 'error',
      'no-bitwise': 'off',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-confusing-arrow': ['error', { allowParens: false }],
      'no-console': 'warn',
      'no-continue': 'off',
      'no-delete-var': 'error',
      'no-div-regex': 'error',
      'no-else-return': 'error',
      'no-empty': 'error',
      'no-empty-function': 'error',
      'no-eq-null': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-boolean-cast': 'error',
      'no-extra-label': 'off',
      'no-extra-semi': 'error',
      'no-floating-decimal': 'error',
      'no-global-assign': 'error',
      'no-implicit-coercion': 'error',
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error',
      'no-inline-comments': 'off',
      'no-invalid-this': 'error',
      'no-iterator': 'error',
      'no-label-var': 'off',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-loop-func': 'error',
      'no-magic-numbers': 'off',
      'no-mixed-operators': 'error',
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-negated-condition': 'error',
      'no-nested-ternary': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-object': 'error',
      'no-new-wrappers': 'error',
      'no-nonoctal-decimal-escape': 'error',
      'no-octal': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': ['error', { props: false }],
      'no-plusplus': 'off',
      'no-proto': 'error',
      'no-redeclare': 'error',
      'no-regex-spaces': 'error',
      'no-restricted-exports': 'off',
      'no-restricted-globals': 'off',
      'no-restricted-imports': 'off',
      'no-restricted-properties': 'off',
      'no-restricted-syntax': 'off',
      'no-return-assign': 'error',
      'no-return-await': 'error',
      'no-script-url': 'error',
      'no-sequences': 'error',
      'no-shadow': 'error',
      'no-shadow-restricted-names': 'error',
      'no-ternary': 'off',
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-undefined': 'off',
      'no-underscore-dangle': ['error', { allowAfterThis: true }],
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-unused-expressions': ['error', { enforceForJSX: true }],
      'no-unused-labels': 'off',
      'no-useless-call': 'error',
      'no-useless-catch': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-constructor': 'error',
      'no-useless-escape': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'no-void': 'error',
      'no-warning-comments': 'error',
      'no-with': 'error',
      'object-shorthand': ['error', 'always'],
      'one-var': ['error', 'never'],
      'one-var-declaration-per-line': 'off',
      'operator-assignment': 'off',
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-destructuring': 'error',
      'prefer-exponentiation-operator': 'error',
      'prefer-named-capture-group': 'error',
      'prefer-numeric-literals': 'error',
      'prefer-object-has-own': 'error',
      'prefer-object-spread': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-regex-literals': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'quote-props': ['error', 'as-needed'],
      radix: 'error',
      'require-await': 'error',
      'require-unicode-regexp': 'error',
      'require-yield': 'error',
      'sort-imports': 'error',
      'sort-keys': 'error',
      'sort-vars': 'error',
      'spaced-comment': [
        'error',
        'always',
        { block: { balanced: true } }
      ],
      strict: ['error', 'safe'],
      'symbol-description': 'error',
      'vars-on-top': 'error',
      yoda: 'error'
    },
    ...{
      // Layout & Formatting
      'array-bracket-newline': 'error',
      'array-bracket-spacing': ['error', 'never'],
      'array-element-newline': [
        'error',
        {
          minItems: 3,
          multiline: true
        }
      ],
      'arrow-parens': ['error', 'as-needed'],
      'arrow-spacing': [
        'error',
        {
          after: true,
          before: true
        }
      ],
      'block-spacing': ['error', 'always'],
      'brace-style': [
        'error',
        '1tbs',
        { allowSingleLine: false }
      ],
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
      'dot-location': ['error', 'property'],
      'eol-last': 'error',
      'func-call-spacing': ['error', 'never'],
      'function-call-argument-newline': ['error', 'consistent'],
      'function-paren-newline': ['error', 'multiline'],
      'generator-star-spacing': ['error', 'after'],
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
      'max-len': 'off',
      'max-statements-per-line': 'error',
      'multiline-ternary': ['error', 'always-multiline'],
      'new-parens': 'error',
      'newline-per-chained-call': 'off',
      'no-extra-parens': [
        'error',
        'all',
        {
          ignoreJSX: 'multi-line',
          nestedBinaryExpressions: false
        }
      ],
      'no-mixed-spaces-and-tabs': 'error',
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': [
        'error',
        {
          max: 2,
          maxBOF: 0,
          maxEOF: 1
        }
      ],
      'no-tabs': 'off',
      'no-trailing-spaces': 'error',
      'no-whitespace-before-property': 'error',
      'nonblock-statement-body-position': 'error',
      'object-curly-newline': ['error', { multiline: true }],
      'object-curly-spacing': ['error', 'always'],
      'object-property-newline': 'error',
      'operator-linebreak': ['error', 'before'],
      'padded-blocks': ['error', 'never'],
      'padding-line-between-statements': 'error',
      quotes: [
        'error',
        'single',
        'avoid-escape'
      ],
      'rest-spread-spacing': ['error', 'never'],
      semi: ['error', 'always'],
      'semi-spacing': [
        'error',
        {
          after: true,
          before: false
        }
      ],
      'semi-style': ['error', 'last'],
      'space-before-blocks': 'error',
      'space-before-function-paren': ['error', 'always'],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'space-unary-ops': 'error',
      'switch-colon-spacing': 'error',
      'template-curly-spacing': ['error', 'never'],
      'template-tag-spacing': ['error', 'never'],
      'unicode-bom': ['error', 'never'],
      'wrap-iife': ['error', 'inside'],
      'wrap-regex': 'off',
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
