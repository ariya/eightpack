/*global system: true, console: true */
var js_beautify, fname, settings, options, code, result;

settings = {
    'indent-char': 'character to indent with, could be tab or space (default is space)',
    'indent-size': 'indentation size (default is 4)'
};

function help() {
    'use strict';
    var opt, str;
    console.log('Usage:');
    console.log('    jsbeautify [options] filename');
    console.log();
    console.log('The content of filename will be reformatted and reindented.');
    console.log('The result will be printed to standard output.');
    console.log();
    console.log('General options:');
    console.log('    --help          Show this help screen');
    console.log();
    console.log('Formatting options:');
    for (opt in settings) {
        if (settings.hasOwnProperty(opt)) {
            str = '    --' + opt;
            while (str.length < 20) {
                str += ' ';
            }
            str += settings[opt];
            console.log(str);
        }
    }
    console.log();
    console.log('Example use of formatting options:');
    console.log('   --indent-char=space --indent-size-2');
    console.log();
    console.log('which would format the code and indent with 2 spaces.');
    console.log();
    console.log('For more information, go to http://jsbeautifier.org.');
    console.log();
    system.exit(-1);
}

if (system.args.length < 1) {
    help();
}

options = {};

system.args.forEach(function (arg) {
    'use strict';
    var option, i, str, predef, value;
    if (arg.length > 2) {
        if (arg.charAt(0) === '-' && arg.charAt(1) === '-') {
            option = arg.substring(2, arg.length);

            if (option === 'help') {
                help();
            }

            i = option.indexOf('=');
            if (i >= 0) {
                str = option.substring(i + 1, option.length);
                option = option.substring(0, i);
            }

            if (option === 'indent-char') {
                if (str === 'tab' || str === 'tabs') {
                    options.indent_char = '\t';
                } else if (str === 'space' || str === 'spaces') {
                    options.indent_char = ' ';
                } else {
                    console.log('Invalid value for option --indent-char.');
                    console.log();
                    system.exit(-1);
                }
                return;
            }

            if (option === 'indent-size') {
                options.indent_size = parseInt(str, 10);
                return;
            }

            console.log('Unknown option: --' + option);
            console.log('Run jsbeautify --help to list all possible options.');
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
    code = system.readFile(fname);
    result = js_beautify(code, options);
    console.log(result);
} catch (e) {
    console.log(e);
}
