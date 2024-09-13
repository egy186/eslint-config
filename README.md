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
import { base, browser, react } from '@egy186/eslint-config';

export default [
  base,
  browser,
  react
];
```

TypeScript:

```js
import { base, typescript } from '@egy186/eslint-config';

export default [base, typescript];
```

Jest:

```js
import base from '@egy186/eslint-config';
import jest from '@egy186/eslint-config/jest';

export default [base, jest];
```
