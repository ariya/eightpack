#!/bin/sh

UPX=$(command -v upx)
if [ -z "$UPX" ]; then
    echo "Error: UPX is needed, please install it via MacPorts."
    exit 1
fi

echo "Creating PackageRoot..."

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
cp ../../../../../jsmin/jsmin .
cp ../../../../../cssbeautify/cssbeautify .
cp ../../../../../cssmin/cssmin .

strip jslint && $UPX -9 jslint
strip jshint && $UPX -9 jshint
strip jsbeautify && $UPX -9 jsbeautify
strip jsmin && $UPX -9 jsmin
strip cssbeautify && $UPX -9 cssbeautify
strip cssmin && $UPX -9 cssmin

cd ../../../
