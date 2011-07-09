# EightPack #

EightPack is a collection of command-line tools for web site and
application developers. It uses [Google V8](http://code.google.com/p/v8/)
as the scripting engine.

EightPack is still in the preparation. It will be ready soon!

## Tools ##

### JSLint ###

[JSLint](http://jslint.com) is the famous code static analysis tool from
Douglas Crockford.

The command-line version inside EightPack current uses JSLint edition
2011-07-04.

To see the usage and the list of all supported options, run:

    jslint --help

For more detailed information, please refer the offical [JSLint
documentation](http://www.jslint.com/lint.html#options).

## Build instructions ##

Building EightPack is as easy as:

    ./configure
    make

Tip: when using multicore CPU, speed up the build with parallel jobs, e.g:

    make -j4

To install the executable (with the target directory <code>/usr/local/bin</code>):

    make install

Alternatively copy the binaries or executables to some directory in the PATH.

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
