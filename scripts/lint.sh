#!/usr/bin/env sh

# eslint-config-fside depends on itself
npm link
npm link eslint-config-fside

`npm bin`/eslint --ext .js .

if [ $? = 0 ]; then
  echo "No errors."
else
  exit 1
fi
