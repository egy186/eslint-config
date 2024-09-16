# @egy186/eslint-config

[![CI](https://github.com/egy186/eslint-config/workflows/CI/badge.svg)](https://github.com/egy186/eslint-config/actions?query=workflow%3ACI)

## Install

```sh
npm install @egy186/eslint-config
```

## `eslint.config.js`

Node.js, ESM:

```js
export { default } from '@egy186/eslint-config';
```

Node.js, CommonJS:

```js
export { commonjs as default } from '@egy186/eslint-config';
```

Browser, React:

```js
import { browser } from '@egy186/eslint-config';
import { react } from '@egy186/eslint-config/react';

export default [browser, react];
```

TypeScript:

```js
import { base } from '@egy186/eslint-config';
import { typescript } from '@egy186/eslint-config/typescript';

export default [base, typescript];
```

TypeScript, tsconfig:

```js
import { base } from '@egy186/eslint-config';
import { typescriptConfig } from '@egy186/eslint-config/typescript';

export default [base, typescriptConfig({ project: 'path/to/tsconfig.eslint.json' })];
```

Jest:

```js
import { base } from '@egy186/eslint-config';
import { jest } from '@egy186/eslint-config/jest';

export default [base, jest];
```
