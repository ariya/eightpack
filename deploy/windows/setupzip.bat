mkdir eightpack
cd eightpack

copy ..\..\..\jslint\jslint.exe .
copy ..\..\..\jshint\jshint.exe .
copy ..\..\..\jsbeautify\jsbeautify.exe .
copy ..\..\..\cssbeautify\cssbeautify.exe .
copy ..\..\..\cssmin\cssmin.exe .

strip jslint.exe && upx -9 jslint.exe
strip jshint.exe && upx -9 jshint.exe
strip jsbeautify.exe && upx -9 jsbeautify.exe
strip cssbeautify.exe && upx -9 cssbeautify.exe
strip cssmin.exe && upx -9 cssmin.exe

cd ..
