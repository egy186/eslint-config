import jiti from 'jiti';

const req = jiti(import.meta.filename);
const { base } = req('./src/index.ts');
const { typescriptConfig } = req('./src/typescript.ts');

const typescript = typescriptConfig({ project: './tsconfig.base.json' });

/** @satisfies {import('eslint').Linter.FlatConfig[]} */
const config = [
  { ignores: ['dist/**/*'] },
  base,
  {
    ...typescript,
    rules: {
      ...typescript.rules,
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: null,
          modifiers: ['requiresQuotes'],
          selector: 'property'
        },
        {
          format: ['camelCase'],
          selector: 'default'
        },
        {
          format: ['camelCase', 'PascalCase'],
          selector: 'import'
        },
        {
          format: ['camelCase', 'UPPER_CASE'],
          selector: 'variable'
        },
        {
          format: ['camelCase', 'snake_case'],
          leadingUnderscore: 'allow',
          selector: 'property'
        },
        {
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          selector: 'parameter'
        },
        {
          format: ['camelCase'],
          leadingUnderscore: 'require',
          modifiers: ['private'],
          selector: 'memberLike'
        },
        {
          format: ['PascalCase'],
          selector: 'typeLike'
        }
      ]
    }
  }
];

export default config;
