#!/usr/bin/env sh

# BASEDIR=`dirname $0`
#echo "BASEDIR:$BASEDIR"
# ln -s ~/node_modules/guoguo/node_modules  node_modules
# rm -rf $BASEDIR/dist
# node app --build=publish
npm install
npm run dist
if [ $? != 0 ]; then
echo 'error'
exit 1
else
ls |grep -v dist|xargs rm -rf
mv dist/* ./
rm -rf dist
fi
