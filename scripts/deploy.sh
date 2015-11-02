#!/usr/bin/env sh

echo "npm install"
echo "==========================================================="
npm install --ignore-scripts

set -o nounset
set -o errexit

npm login <<!
$NPM_USERNAME
$NPM_PASSWORD
$NPM_EMAIL
!

echo "npm publish"
echo "==========================================================="
npm publish

echo "generate docs"
echo "==========================================================="

npm run docs
