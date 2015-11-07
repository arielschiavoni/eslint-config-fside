# Frontendside JavaScript Style Guide
> This package provides Frontendside's .eslintrc as an extensible shared config.

[![Circle CI](https://circleci.com/gh/arielschiavoni/eslint-config-fside.svg?style=svg)](https://circleci.com/gh/arielschiavoni/eslint-config-fside)

## Usage
Six different ESLint configurations are exported for your usage.

`fside` this is the default export that contains all the ESLint rules for ES6.

  - It requires `eslint`, `babel-eslint`.

  ```sh
  $ npm install eslint-config-fside babel-eslint eslint --save-dev
  ```
  - Add `"extends": "fside"` to your `.eslintrc`.

`fside/lib/react` this export adds rules for React.

  - It requires `eslint`, `babel-eslint`, and `eslint-plugin-react`.

  ```sh
  $ npm install eslint-config-fside babel-eslint eslint-plugin-react eslint --save-dev
  ```
  - Add `"extends": "fside/lib/react"` to your `.eslintrc`

### Test
For testing there are 4 extra configurations exported, these configurations only add some globals depending on the use of `karma` and `react` on your tests. You can create another `.eslintrc` file in your `test/` folder and extend one of these configurations.

`fside/lib/test-node`
  - It requires `eslint`, `babel-eslint`.

  ```sh
  $ npm install eslint-config-fside babel-eslint eslint --save-dev
  ```
  - Add `"extends": "fside/lib/test-node"` to your `.eslintrc`.

`fside/lib/test-node-react`
  - It requires `eslint`, `babel-eslint`, and `eslint-plugin-react`.

  ```sh
  $ npm install eslint-config-fside babel-eslint eslint-plugin-react eslint --save-dev
  ```
  - Add `"extends": "fside/lib/test-node-react"` to your `.eslintrc`

`fside/lib/test-karma`
  - It requires `eslint`, `babel-eslint`.

  ```sh
  $ npm install eslint-config-fside babel-eslint eslint --save-dev
  ```
  - Add `"extends": "fside/lib/test-karma"` to your `.eslintrc`.

`fside/lib/test-karma-react`
  - It requires `eslint`, `babel-eslint`, and `eslint-plugin-react`.

  ```sh
  $ npm install eslint-config-fside babel-eslint eslint-plugin-react eslint --save-dev
  ```
  - Add `"extends": "fside/lib/test-karma-react"` to your `.eslintrc`
