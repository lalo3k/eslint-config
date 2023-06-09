# ESLint config
These are settings for ESLint that I use in my projects.

## What it does
Semi-strict linting rules, to ensure consistency in file structure, formatting and coding style

## Setup
1. In your project folder, run:
```
    npm i --save-dev @lalo3k/eslint-config
```

2. create (or update) a `.eslintrc` file with the following content, this can also be done in the `eslintConfig` section of your package.json

```js
{
  'extends': [
    '@lalo3k/eslint-config'
  ]
}
```

3. Copy the [.prettierrc](https://github.com/lalo3k/eslint-config/blob/main/.prettierrc) file from this repository into your project folder

4. Feel free to override the rules that are not right for your project