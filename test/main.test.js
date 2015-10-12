import eslintConfig from '../src/main';
import eslintBaseConfig from '../src/base';

describe('eslint-config-fside', () => {
  it('should import base config as default', () => {
    expect(eslintConfig.extends).to.eql([
      'eslint-config-fside/lib/base'
    ]);
  });

  describe('base', () => {
    it('should import all the rules', () => {
      const rulesPath = 'eslint-config-fside/lib/rules/';
      const rules = [
        'best-practices',
        'errors',
        'legacy',
        'node',
        'strict',
        'style',
        'variables',
        'es6'
      ];
      expect(eslintBaseConfig.extends).to.eql(rules.map(rule => rulesPath + rule));
    });

    it('should use babel-eslint parser', () => {
      expect(eslintBaseConfig.parser).to.equal('babel-eslint');
    });
  });
});
