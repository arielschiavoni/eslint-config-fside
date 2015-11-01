#!/usr/bin/env sh

# exit the script as soon as one of the commands failed
set -e

# eslint-config-fside depends on itself
if [ ! -d "node_modules/eslint-config-fside" ]; then
  echo "Creating symbolic link..."
  ln -s .. node_modules/eslint-config-fside
fi

npm run build

# npm test can't lint when CI is enabled because it instruments code!
if [ "$NODE_ENV" = "ci" ]; then
  npm run lint
fi

`npm bin`/babel-node `npm bin`/karma start karma.config.js
