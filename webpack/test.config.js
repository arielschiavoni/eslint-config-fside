import path from 'path';
import webpack from 'webpack';

export const ENTRY_POINT = './test/main.js';

const getModuleConfig = () => {
  let preLoaders = [];
  let loaders = [];

  if (process.env.NODE_ENV === 'ci') {
    preLoaders = [...preLoaders, {
      test: /\.(js)?$/,
      include: /(src)/,
      exclude: /(node_modules)/,
      loader: 'isparta-instrumenter'
    }];

    loaders = [...loaders, {
      test: /\.(js)?$/,
      include: /(src|test)/,
      loader: 'babel'
    }];
  } else {
    loaders = [...loaders, {
      test: /\.(js)?$/,
      include: /(src|test)/,
      loader: 'babel!eslint'
    }];
  }

  return {preLoaders, loaders};
};

const resolveFallback = path.join(__dirname, '..', 'node_modules');

export default {
  resolve: {
    extensions: ['', '.js', '.json'],
    fallback: resolveFallback
  },
  resolveLoader: {fallback: resolveFallback},
  devtool: 'inline-source-map',
  module: getModuleConfig(),
  plugins: [new webpack.NoErrorsPlugin(), new webpack.optimize.DedupePlugin()]
};

const devServerConfig = {
  quiet: false,
  noInfo: false,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: true,
    chunks: true,
    chunkModules: false
  }
};

export {devServerConfig};
