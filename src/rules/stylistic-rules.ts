/* eslint max-lines: "off" */

import type { ESLint } from 'eslint';

const rules = {
  '@stylistic/array-bracket-newline': 'error',
  '@stylistic/array-bracket-spacing': ['error', 'never'],
  '@stylistic/array-element-newline': [
    'error',
    {
      minItems: 3,
      multiline: true
    }
  ],
  '@stylistic/arrow-parens': ['error', 'as-needed'],
  '@stylistic/arrow-spacing': [
    'error',
    {
      after: true,
      before: true
    }
  ],
  '@stylistic/block-spacing': ['error', 'always'],
  '@stylistic/brace-style': [
    'error',
    '1tbs',
    { allowSingleLine: false }
  ],
  '@stylistic/comma-dangle': ['error', 'never'],
  '@stylistic/comma-spacing': [
    'error',
    {
      after: true,
      before: false
    }
  ],
  '@stylistic/comma-style': ['error', 'last'],
  '@stylistic/computed-property-spacing': ['error', 'never'],
  '@stylistic/curly-newline': ['error', 'always'],
  '@stylistic/dot-location': ['error', 'property'],
  '@stylistic/eol-last': 'error',
  '@stylistic/exp-list-style': 'off',
  '@stylistic/function-call-argument-newline': ['error', 'consistent'],
  '@stylistic/function-call-spacing': ['error', 'never'],
  '@stylistic/function-paren-newline': ['error', 'multiline'],
  '@stylistic/generator-star-spacing': ['error', 'after'],
  '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
  '@stylistic/indent': [
    'error',
    2,
    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      MemberExpression: 1,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      SwitchCase: 1
    }
  ],
  '@stylistic/indent-binary-ops': ['error', 2],
  '@stylistic/jsx-child-element-spacing': 'error',
  '@stylistic/jsx-closing-bracket-location': 'error',
  '@stylistic/jsx-closing-tag-location': 'error',
  '@stylistic/jsx-curly-brace-presence': [
    'error',
    {
      children: 'ignore',
      props: 'never'
    }
  ],
  '@stylistic/jsx-curly-newline': ['error', 'never'],
  '@stylistic/jsx-curly-spacing': 'error',
  '@stylistic/jsx-equals-spacing': 'error',
  '@stylistic/jsx-first-prop-new-line': 'error',
  '@stylistic/jsx-function-call-newline': 'error',
  '@stylistic/jsx-indent-props': ['error', 2],
  '@stylistic/jsx-max-props-per-line': 'error',
  '@stylistic/jsx-newline': 'off',
  '@stylistic/jsx-one-expression-per-line': 'error',
  '@stylistic/jsx-pascal-case': 'error',
  '@stylistic/jsx-quotes': ['error', 'prefer-double'],
  '@stylistic/jsx-self-closing-comp': 'error',
  '@stylistic/jsx-tag-spacing': ['error', { beforeClosing: 'never' }],
  '@stylistic/jsx-wrap-multilines': 'error',
  '@stylistic/key-spacing': [
    'error',
    {
      afterColon: true,
      beforeColon: false
    }
  ],
  '@stylistic/keyword-spacing': [
    'error',
    {
      after: true,
      before: true
    }
  ],
  '@stylistic/line-comment-position': 'error',
  '@stylistic/linebreak-style': 'error',
  '@stylistic/lines-around-comment': 'off',
  '@stylistic/lines-between-class-members': 'error',
  '@stylistic/max-len': 'off',
  '@stylistic/max-statements-per-line': 'error',
  '@stylistic/member-delimiter-style': 'error',
  '@stylistic/multiline-comment-style': 'error',
  '@stylistic/multiline-ternary': ['error', 'always-multiline'],
  '@stylistic/new-parens': 'error',
  '@stylistic/newline-per-chained-call': 'off',
  '@stylistic/no-confusing-arrow': ['error', { allowParens: false }],
  '@stylistic/no-extra-parens': [
    'error',
    'all',
    {
      ignoreJSX: 'multi-line',
      nestedBinaryExpressions: false
    }
  ],
  '@stylistic/no-extra-semi': 'error',
  '@stylistic/no-floating-decimal': 'error',
  '@stylistic/no-mixed-operators': 'error',
  '@stylistic/no-mixed-spaces-and-tabs': 'error',
  '@stylistic/no-multi-spaces': 'error',
  '@stylistic/no-multiple-empty-lines': [
    'error',
    {
      max: 2,
      maxBOF: 0,
      maxEOF: 1
    }
  ],
  '@stylistic/no-tabs': 'off',
  '@stylistic/no-trailing-spaces': 'error',
  '@stylistic/no-whitespace-before-property': 'error',
  '@stylistic/nonblock-statement-body-position': 'error',
  '@stylistic/object-curly-newline': 'error',
  '@stylistic/object-curly-spacing': ['error', 'always'],
  '@stylistic/object-property-newline': 'error',
  '@stylistic/one-var-declaration-per-line': 'off',
  '@stylistic/operator-linebreak': ['error', 'before'],
  '@stylistic/padded-blocks': ['error', 'never'],
  '@stylistic/padding-line-between-statements': 'error',
  '@stylistic/quote-props': ['error', 'as-needed'],
  '@stylistic/quotes': [
    'error',
    'single',
    { avoidEscape: true }
  ],
  '@stylistic/rest-spread-spacing': ['error', 'never'],
  '@stylistic/semi': ['error', 'always'],
  '@stylistic/semi-spacing': [
    'error',
    {
      after: true,
      before: false
    }
  ],
  '@stylistic/semi-style': ['error', 'last'],
  '@stylistic/space-before-blocks': 'error',
  '@stylistic/space-before-function-paren': ['error', 'always'],
  '@stylistic/space-in-parens': ['error', 'never'],
  '@stylistic/space-infix-ops': 'error',
  '@stylistic/space-unary-ops': 'error',
  '@stylistic/spaced-comment': [
    'error',
    'always',
    { block: { balanced: true } }
  ],
  '@stylistic/switch-colon-spacing': 'error',
  '@stylistic/template-curly-spacing': ['error', 'never'],
  '@stylistic/template-tag-spacing': ['error', 'never'],
  '@stylistic/type-annotation-spacing': 'error',
  '@stylistic/type-generic-spacing': 'error',
  '@stylistic/type-named-tuple-spacing': 'error',
  '@stylistic/wrap-iife': ['error', 'inside'],
  '@stylistic/wrap-regex': 'off',
  '@stylistic/yield-star-spacing': [
    'error',
    {
      after: true,
      before: false
    }
  ]
} as const satisfies ESLint.ConfigData['rules'];

export default rules;
