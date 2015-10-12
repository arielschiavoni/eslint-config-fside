import webpackConfig, {ENTRY_POINT, devServerConfig} from './webpack/test.config';
const reporters = process.env.NODE_ENV === 'ci' ? ['mocha', 'coverage'] : ['mocha'];

export default function(config) {
  config.set({

    browsers: ['Chrome'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // to avoid DISCONNECTED messages
    browserDisconnectTimeout: 10000, // default 2000
    browserDisconnectTolerance: 1, // default 0
    browserNoActivityTimeout: 60000, // default 10000

    files: [
      ENTRY_POINT
    ],

    preprocessors: {
      [ENTRY_POINT]: ['webpack']
    },

    /**
     * Use Mocha as the test framework, Sinon for mocking, and
     * Chai for assertions (includes expect, should and assert).
     */
    frameworks: ['mocha', 'sinon-chai'],

    /**
     * After running the tests, return the results and generate reports
     */
    reporters,

    /**
     * When generating a code coverage report, use `lcov` format and
     * place the result in coverage/lcov.info
     *
     */
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'lcovonly', subdir: '.', file: 'lcov.info'},
        {type: 'text', subdir: '.'},
        {type: 'text-summary', subdir: '.'},
        {type: 'html', subdir: 'html'}
      ]
    },

    /**
     * The configuration for the karma-webpack plugin.
     */
    webpack: webpackConfig,

    /**
     * The configuration for the webpackDevServer
     */
    webpackMiddleware: devServerConfig,

    /**
     * Single run only on CI
     */
    singleRun: process.env.NODE_ENV === 'ci',

    /**
     * List of plugins
     */
    plugins: [
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-webpack',
      'karma-coverage',
      'karma-sinon-chai',
      'karma-chrome-launcher'
    ]
  });
}
