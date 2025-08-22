// eslint-disable-next-line import/no-namespace
import type * as index from './src/index.js';
// eslint-disable-next-line import/no-namespace
import type * as ts from './src/typescript.js';
import { defineConfig, globalIgnores } from 'eslint/config';
import { createJiti } from 'jiti';

const jiti = createJiti(import.meta.url);
const { base } = await jiti.import<typeof index>('./src/index.ts');
const { typescriptConfig } = await jiti.import<typeof ts>('./src/typescript.ts');

const typescript = typescriptConfig({ projectService: { allowDefaultProject: ['*.ts', 'test/*.ts'] } });

const config = defineConfig([
  globalIgnores(['dist/**/*']),
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
      ],
      '@typescript-eslint/no-floating-promises': [
        'error',
        {
          allowForKnownSafeCalls: [
            {
              from: 'package',
              name: ['test'],
              package: 'node:test'
            }
          ],
          ignoreVoid: true
        }
      ]
    }
  }
]);

export default config;
