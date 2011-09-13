/*global system: true, console: true */
var jsmin, fname, settings, level, code, result;

settings = settings || {};

function help() {
    'use strict';
    var opt, str;
    console.log('Usage:');
    console.log('    jsmin [options] filename');
    console.log();
    console.log('The content of filename will be minified and printed to');
    console.log('standard output.');
    console.log();
    console.log('General options:');
    console.log('    --help          Show this help screen');
    console.log('    --version       Display version number');
    console.log();
    console.log('JSMin options (see http://fmarcia.info/jsmin/test.html):');
    for (opt in settings) {
        if (settings.hasOwnProperty(opt)) {
            str = '    --' + opt;
            while (str.length < 25) {
                str += ' ';
            }
            str += settings[opt];
            console.log(str);
        }
    }
    console.log();
    console.log('For more information, go to http://fmarcia.info/jsmin/test.html and');
    console.log('http://www.crockford.com/javascript/jsmin.html.');
    console.log();
    system.exit(-1);
}

if (system.args.length < 1) {
    help();
}

level = 2;

system.args.forEach(function (arg) {
    'use strict';
    var option, i;
    if (arg.length > 2) {
        if (arg.charAt(0) === '-' && arg.charAt(1) === '-') {
            option = arg.substring(2, arg.length);

            if (option === 'help') {
                help();
            }

            if (option === 'version') {
                console.log('jsmin.js edition 2010/01/15.');
                system.exit(-1);
            }

            if (!settings.hasOwnProperty(option)) {
                console.log('Unknown option: --' + option);
                console.log('Run jsmin --help to list all possible options.');
                console.log();
                system.exit(-1);
            }

            if (option === 'aggressive') {
                level = 3;
            }

            if (option === 'minimal') {
                level = 1;
            }

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
    code = system.readFile(fname);
    result = jsmin('', code, level);
    console.log(result);
} catch (e) {
    console.log(e);
}
