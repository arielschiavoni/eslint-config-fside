export default {
  extends: [
    'eslint-config-fside/lib/base'
  ],
  env: {
    mocha: true
  },
  globals: {
    expect: true,
    sinon: true,
    assert: true,
    should: true
  },
  rules: {
    'no-unused-expressions': 0
  }
};
