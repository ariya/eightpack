/*global system: true, console: true */
var cssbeautify, fname, settings, options, style, result;

settings = {
    'indent-char': 'character to indent with, could be tab or space (default is space)',
    'indent-size': 'indentation size (default is 4)',
    'open-brace': 'define the placement of open curly brace, end-of-line (default) or separate-line'
};

function help() {
    'use strict';
    var opt, str;
    console.log('Usage:');
    console.log('    cssbeautify [options] filename');
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
    console.log('   --open-brace=separate-line --indent-char=space');
    console.log();
    console.log('which would indent the style with spaces (the default is 4),');
    console.log('with the open curly brace placed in its own line.');
    console.log();
    console.log('For more information, go to http://senchalabs.github.com/cssbeautify/.');
    console.log();
    system.exit(-1);
}

if (system.args.length < 1) {
    help();
}

options = {};
options.indent_char = ' ';
options.indent_size = 4;

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

            if (option === 'open-brace') {
                if (str === 'end-of-line' || str === 'separate-line') {
                    options.openbrace = str;
                } else {
                    console.log('Invalid value for option --open-brace.');
                    console.log();
                    system.exit(-1);
                }
                return;
            }


            console.log('Unknown option: --' + option);
            console.log('Run cssbeautify --help to list all possible options.');
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

options.indent = '';
while (options.indent_size > 0) {
    options.indent += options.indent_char;
    options.indent_size -= 1;
}

try {
    style = system.readFile(fname);
    result = cssbeautify(style, options);
    console.log(result);
} catch (e) {
    console.log(e);
}
