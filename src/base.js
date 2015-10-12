export default {
  extends: [
    'eslint-config-fside/lib/rules/best-practices',
    'eslint-config-fside/lib/rules/errors',
    'eslint-config-fside/lib/rules/legacy',
    'eslint-config-fside/lib/rules/node',
    'eslint-config-fside/lib/rules/strict',
    'eslint-config-fside/lib/rules/style',
    'eslint-config-fside/lib/rules/variables',
    'eslint-config-fside/lib/rules/es6'
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  rules: {}
};
