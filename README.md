# @egy186/eslint-config

[![CI](https://github.com/egy186/eslint-config/workflows/CI/badge.svg)](https://github.com/egy186/eslint-config/actions?query=workflow%3ACI)

## Install

```sh
npm install @egy186/eslint-config
```

## `eslint.config.js`

Node.js:

```js
import base from '@egy186/eslint-config';

export default [
  {
    ...base,
    files: ['**/*.js']
  }
];
```

Browser, React:

```js
import base from '@egy186/eslint-config';
import browser from '@egy186/eslint-config/browser';
import react from '@egy186/eslint-config/react';

export default [
  base,
  browser,
  react
];
```

TypeScript:

```js
import base from '@egy186/eslint-config';
import typescript from '@egy186/eslint-config/typescript';

export default [base, typescript];
```

Jest:

```js
import base from '@egy186/eslint-config';
import jest from '@egy186/eslint-config/jest';

export default [base, jest];
```
