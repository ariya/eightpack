# EightPack #

EightPack is a collection of JavaScript-based command-line tools for web
developers. It uses [Google V8](http://code.google.com/p/v8/)
as the scripting engine.

It is available on all major desktop platforms (Windows, Mac OS X, Linux).

As of now, EightPack consists of the following tools: JSLint, JSHint, JS
Beautifier, CSS Beautify, and cssmin.js.


### JSLint ###

[JSLint](http://jslint.com) is the famous code static analysis tool from
Douglas Crockford.

The command-line version inside EightPack currently uses JSLint edition
2011-07-04.

To see the usage and the list of all supported options, run:

    jslint --help

For more detailed information, please refer the offical [JSLint
documentation](http://www.jslint.com/lint.html#options).

### JSHint ###

[JSHint](http://jshint.com) is a community-driven tool to detect errors and
potential problems in JavaScript code. It is a fork of JSLint.

The command-line version inside EightPack currently uses JSLint edition
2011-04-16.

To see the usage and the list of all supported options, run:

    jshint --help

For more detailed information, please refer the offical [JSHint
documentation](http://jshint.com/#docs).

### JSBeautifier ###

[JSBeautifier](http://jsbeautifier.org) is a tool (written by Einar Lielmanis)
to format and indent JavaScript code.

The command-line version inside EightPack currently uses JSBeautifier
from revision 5d37b7e9 (dated 2011-06-27).

To see the usage and the list of all supported options, run:

    jsbeautify --help

### CSS Beautify ###

[CSS Beautify](http://senchalabs.github.com/cssbeautify/) is a tool to reindent
and reformat styles written in CSS.

The command-line version inside EightPack currently uses CSS Beautify
from revision d4fedf02 (dated 2011-07-01).

To see the usage and the list of all supported options, run:

    cssbeautify --help

### cssmin.js ###

[cssmin.js](http://www.phpied.com/cssmin-js/) is a JavaScript port of
YUICompressor's CSS minifier. It is useful to reduce the size of CSS
files.

The command-line version inside EightPack currently uses cssmin.js from
YUI Compressor 2.4.6 (dated 2011-04-15).

To see the usage and the list of all supported options, run:

    cssmin --help

## Build Instructions ##

Tip: when using multicore CPU, speed up the build with parallel jobs, e.g:

    make -j4

### Mac OS ###

Requirement: development tools, i.e. by installing [Xcode 3.2 or
later](http://developer.apple.com/tools/xcode/).

From the Terminal application, run:

    ./configure
    make

To install the executables (with the target directory <code>/usr/local/bin</code>):

    make install

Alternatively copy the executables to some directory in the PATH.

### Linux ###

Requirement: C++ compiler and the corresponding libraries (e.g.
<code>build-essential</code> package on Ubuntu,
<code>gcc-g++</code> and <code>make</code> packages on OpenSUSE).

From the terminal, run:

    ./configure
    make

To install the executables (with the target directory <code>/usr/local/bin</code>):

    make install

Alternatively copy the binaries or executables to some directory in the PATH.

### Windows ###

Requirement: [CMake](http://www.cmake.org/cmake/resources/software.html)
version 2.6 or later and [MinGW](http://mingw.org) with g++ 4.4 or later.

From the command-line, run:

    cmake -G "MinGW Makefiles" .
    mingw32-make

To install the executables, copy all EXE files into a directory in the
PATH.

## Mini FAQ ##

**Q: How does this differ than Node.JS package or Rhino-based wrapper?**

A: EightPack tools are self-contained, they do not have any run-time
dependencies (beside the libraries provided by the platform).
With <code>strip</code> and
[UPX](http://upx.sf.net), the Windows executable only weighs at 920 KB.

Every tool is a native application on three major desktop operating systems.
The Windows version does not rely on Cygwin or other emulation layers.
No OS is a second-class citizen.

## License ##

Copyright (C) 2011 Ariya Hidayat.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

### Included Software and Licenses ###

The following third party software is distributed with EightPack and is provided
under other licenses and/or has source available from other locations.

* [V8](http://v8.googlecode.com), BSD License (see [its terms and conditions](http://code.google.com/apis/v8/terms.html))
* [JSLint](http://jslint.com), modified MIT License (see [jslint.js](https://github.com/douglascrockford/JSLint/blob/master/jslint.js))
* [JSHint](http://jshint.com), modified MIT License (see [jshint.js](https://github.com/jshint/jshint/blob/master/jshint.jsh))
* [JSBeautifier](http://jsbeautifier.org), MIT License (see [license.txt](https://github.com/einars/js-beautify/blob/master/license.txt))
* [CSS Beautify](http://senchalabs.github.com/cssbeautify/), MIT License (see [README](https://github.com/senchalabs/cssbeautify/blob/master/README.md))
* [cssmin.js](http://www.phpied.com/cssmin-js/), BSD License (see [cssmin.js](https://github.com/yui/yuicompressor/blob/master/ports/js/cssmin.js))
