# @egy186/eslint-config

[![CI](https://github.com/egy186/eslint-config/workflows/CI/badge.svg)](https://github.com/egy186/eslint-config/actions?query=workflow%3ACI)

## Install

```sh
npm install @egy186/eslint-config
```

## `.eslintrc.json`

Node.js, ESM:

```json
{
  "extends": [
    "@egy186/eslint-config"
  ]
}
```

Node.js, CommonJS:

```json
{
  "extends": [
    "@egy186/eslint-config",
    "@egy186/eslint-config/commonjs"
  ]
}
```

Browser, React:

```json
{
  "extends": [
    "@egy186/eslint-config",
    "@egy186/eslint-config/browser",
    "@egy186/eslint-config/react"
  ]
}
```

TypeScript:

```json
{
  "extends": [
    "@egy186/eslint-config",
    "@egy186/eslint-config/typescript"
  ],
  "parserOptions": {
    "project": "./path/to/tsconfig.json"
  }
}
```

Jest:

```json
{
  "extends": [
    "@egy186/eslint-config",
    "@egy186/eslint-config/jest"
  ]
}
```
