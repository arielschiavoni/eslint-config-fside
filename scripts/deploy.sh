#!/usr/bin/env sh

echo "npm install"
echo "==========================================================="
npm install --ignore-scripts

echo "npm publish"
echo "==========================================================="
npm publish

echo "generate docs"
echo "==========================================================="

npm run docs
