/*global system: true, console: true */
var cssmin, fname, settings, style, result;

function help() {
    'use strict';
    var opt, str;
    console.log('Usage:');
    console.log('    cssmin [options] filename');
    console.log();
    console.log('The content of filename will be minified and printed to');
    console.log('standard output.');
    console.log();
    console.log('General options:');
    console.log('    --help          Show this help screen');
    console.log('    --version       Display version number');
    console.log();
    console.log('For more information, go to http://www.phpied.com/yuicompressor-cssmin.');
    console.log();
    system.exit(-1);
}

if (system.args.length < 1) {
    help();
}

system.args.forEach(function (arg) {
    'use strict';
    var option, i, str, predef, value;
    if (arg.length > 2) {
        if (arg.charAt(0) === '-' && arg.charAt(1) === '-') {
            option = arg.substring(2, arg.length);

            if (option === 'help') {
                help();
            }

            if (option === 'version') {
                console.log('cssmin.js from YUICompressor 2.4.6.');
                system.exit(-1);
            }

            console.log('Unknown option: --' + option);
            console.log('Run cssmin --help to list all possible options.');
            console.log();
            system.exit(-1);

            return;
        }
    }
    if (typeof fname !== 'undefined') {
        console.log('Please only specify one filename!');
        console.log();
        system.exit(-1);
    }
    fname = arg;
});


if (typeof fname === 'undefined') {
    help();
}

try {
    style = system.readFile(fname);
    result = YAHOO.compressor.cssmin(style);
    console.log(result);
} catch (e) {
    console.log(e);
}
