#!/usr/bin/env sh

# eslint-config-fside depends on itself
if [ ! -d "node_modules/eslint-config-fside" ]; then
  echo "Creating symbolic link..."
  ln -s .. node_modules/eslint-config-fside
fi

npm run build

`npm bin`/eslint --ext .js .

if [ $? = 0 ]; then
  echo "No errors."
else
  exit 1
fi
