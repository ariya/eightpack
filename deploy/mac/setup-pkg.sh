#!/bin/sh

rm -rf PackageRoot
mkdir PackageRoot
cd PackageRoot
mkdir eightpack
cd eightpack

mkdir scripts
cp ../../update-path.sh scripts/
chmod +x scripts/update-path.sh

mkdir bin
cd bin
cp ../../../../../jslint/jslint .
cp ../../../../../jshint/jshint .
cp ../../../../../jsbeautify/jsbeautify .
cp ../../../../../cssbeautify/cssbeautify .
cp ../../../../../cssmin/cssmin .

strip jslint && upx -9 jslint
strip jshint && upx -9 jshint
strip jsbeautify && upx -9 jsbeautify
strip cssbeautify && upx -9 cssbeautify
strip cssmin && upx -9 cssmin

cd ../../../
