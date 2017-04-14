#!/bin/bash
rm -rf dist dist.zip
npm run dist
if [ $? != 0 ]; then
echo 'error'
exit 1
else
cd dist && zip -r  ../dist.zip *
fi