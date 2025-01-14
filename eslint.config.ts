import type { Linter } from 'eslint';
import { base } from '@egy186/eslint-config';
import { typescriptConfig } from '@egy186/eslint-config/typescript';

const typescript = typescriptConfig({ projectService: { allowDefaultProject: ['*.ts', 'test/*.ts'] } });

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
] as const satisfies Linter.Config[];

export default config;
