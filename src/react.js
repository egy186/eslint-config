'use strict';

module.exports = {
  parserOptions: {
    ecmaFeatures: { jsx: true },
    jsxPragma: null
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/boolean-prop-naming': 'error',
    'react/button-has-type': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/destructuring-assignment': ['error', 'always'],
    'react/display-name': 'error',
    'react/forbid-component-props': 'error',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'error',
    'react/forbid-prop-types': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/hook-use-state': 'error',
    'react/iframe-missing-sandbox': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-child-element-spacing': 'off', // Migrated to @stylistic/jsx-child-element-spacing
    'react/jsx-closing-bracket-location': 'off', // Migrated to @stylistic/jsx-closing-bracket-location
    'react/jsx-closing-tag-location': 'off', // Migrated to @stylistic/jsx-closing-tag-location
    'react/jsx-curly-brace-presence': 'off', // Migrated to @stylistic/jsx-curly-brace-presence
    'react/jsx-curly-newline': 'off', // Migrated to @stylistic/jsx-curly-newline
    'react/jsx-curly-spacing': 'off', // Migrated to @stylistic/jsx-curly-spacing
    'react/jsx-equals-spacing': 'off', // Migrated to @stylistic/jsx-equals-spacing
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-first-prop-new-line': 'off', // Migrated to @stylistic/jsx-first-prop-new-line
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-handler-names': [
      'error',
      {
        checkInlineFunction: true,
        checkLocalVariables: true
      }
    ],
    'react/jsx-indent': 'off', // Migrated to @stylistic/jsx-indent
    'react/jsx-indent-props': 'off', // Migrated to @stylistic/jsx-indent-props
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true
      }
    ],
    'react/jsx-max-depth': 'error',
    'react/jsx-max-props-per-line': 'off', // Migrated to @stylistic/jsx-max-props-per-line
    'react/jsx-newline': 'off', // Migrated to @stylistic/jsx-newline
    'react/jsx-no-bind': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-leaked-render': 'error',
    'react/jsx-no-literals': 'error',
    'react/jsx-no-script-url': [
      'error',
      [
        {
          name: 'Link',
          props: ['to']
        }
      ]
    ],
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-one-expression-per-line': 'off', // Migrated to @stylistic/jsx-one-expression-per-line
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'off', // Migrated to @stylistic/jsx-props-no-multi-spaces
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': 'off', // Migrated to @stylistic/jsx-sort-props
    'react/jsx-tag-spacing': 'off', // Migrated to @stylistic/jsx-tag-spacing
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'off', // Migrated to @stylistic/jsx-wrap-multilines
    'react/no-access-state-in-setstate': 'error',
    'react/no-adjacent-inline-elements': 'error',
    'react/no-array-index-key': 'error',
    'react/no-arrow-function-lifecycle': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-invalid-html-attribute': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'error',
    'react/no-namespace': 'error',
    'react/no-object-type-as-default-prop': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'warn',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'error',
    'react/no-unstable-nested-components': 'error',
    'react/no-unused-class-component-methods': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-exact-props': 'error',
    'react/prefer-read-only-props': 'error',
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'error',
    'react/require-optimization': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'off', // Migrated to @stylistic/self-closing-comp
    'react/sort-comp': [
      'error',
      {
        order: [
          'constructor',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render'
        ]
      }
    ],
    'react/sort-default-props': 'error',
    'react/sort-prop-types': 'error',
    'react/state-in-constructor': 'error',
    'react/static-property-placement': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error'
  },
  settings: { react: { version: 'detect' } }
};
