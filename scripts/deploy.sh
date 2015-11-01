#!/usr/bin/env sh

echo "npm install"
echo "==========================================================="
npm install --ignore-scripts

echo -e "$NPM_USERNAME\n$NPM_PASSWORD\n$NPM_EMAIL"

echo "npm publish"
echo "==========================================================="
npm publish

echo "generate docs"
echo "==========================================================="

npm run docs
