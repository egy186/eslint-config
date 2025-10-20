# @egy186/eslint-config

[![CI](https://github.com/egy186/eslint-config/workflows/CI/badge.svg)](https://github.com/egy186/eslint-config/actions?query=workflow%3ACI)

## Install

```sh
npm install -D eslint @egy186/eslint-config
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

```sh
npm install -D eslint-plugin-react eslint-plugin-react-hooks
```

```js
import { browser } from '@egy186/eslint-config';
import { react } from '@egy186/eslint-config/react';

export default [browser, react];
```

TypeScript:

```sh
npm install -D typescript-eslint eslint-import-resolver-typescript
```

```js
import { base } from '@egy186/eslint-config';
import { typescript } from '@egy186/eslint-config/typescript';

export default [base, typescript];
```

TypeScript, tsconfig:

```sh
npm install -D typescript-eslint eslint-import-resolver-typescript
```

```js
import { base } from '@egy186/eslint-config';
import { typescriptConfig } from '@egy186/eslint-config/typescript';

export default [base, typescriptConfig({ projectService: { allowDefaultProject: ['*.ts'] } })];
```

Vitest:

```sh
npm install -D @vitest/eslint-plugin
```

```js
import { base } from '@egy186/eslint-config';
import { vitest } from '@egy186/eslint-config/vitest';

export default [base, vitest];
```
