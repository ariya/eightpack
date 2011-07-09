/*global system: true, console: true, JSLINT: true */
var fname, settings, options, code, result;

settings = settings || {};

function help() {
    'use strict';
    var opt, str;
    console.log('Usage:');
    console.log('    jslint [options] filename');
    console.log();
    console.log('General options:');
    console.log('    --help      Show this help screen');
    console.log('    --version   Display JSLint edition');
    console.log();
    console.log('JSLint options (see http://jslint.com/lint.html#options):');
    for (opt in settings) {
        if (settings.hasOwnProperty(opt)) {
            str = '    --' + opt;
            while (str.length < 16) {
                str += ' ';
            }
            str += settings[opt];
            console.log(str);
        }
    }
    console.log();
    console.log('Example use of JSLint options:');
    console.log('   --eqeq=true --continue=false --maxerr=100');
    console.log();
    console.log('which would tolerate == and != but would not tolerate the use');
    console.log('of continue statement and stop after encountering 100 errors.');
    console.log();
    console.log('For more information about JSLint, go to http://jslint.com.');
    console.log('Copyright (c) 2002 Douglas Crockford  (www.JSLint.com).');
    console.log();
    system.exit(-1);
}

if (system.args.length < 1) {
    help();
}

options = {
    "indent": "4",
    "maxerr": "1000"
};

system.args.forEach(function (arg) {
    'use strict';
    var option, i, str, predef, value;
    if (arg.length > 2) {
        if (arg.charAt(0) === '-' && arg.charAt(1) === '-') {
            option = arg.substring(2, arg.length);

            if (option === 'version') {
                console.log('JSLint edition', JSLINT.edition);
                console.log();
                system.exit();
            }

            if (option === 'help') {
                help();
            }

            i = option.indexOf('=');
            if (i >= 0) {
                str = option.substring(i + 1, option.length);
                option = option.substring(0, i);
            }

            if (!settings.hasOwnProperty(option)) {
                console.log('Unknown option: --' + option);
                console.log('Run jslint --help to list all possible options.');
                console.log();
                system.exit(-1);
            }

            if (option === 'predef') {
                if (typeof str === 'string') {
                    options.predef = str.split(',');
                    return;
                } else {
                    console.log('Invalid value for option --predef.');
                    console.log();
                    system.exit(-1);
                }
            }

            if (['indent', 'maxlen', 'maxerr'].indexOf(option) >= 0) {
                options[option] = parseInt(str, 10);
                return;
            }

            if (typeof str === 'undefined') {
                str = 'true';
            }
            if (str !== 'true' && str !== 'false') {
                console.log('Invalid value for option --' + option + ': must be true or false.');
                console.log();
                system.exit(-1);
            } else {
                options[option] = (str === 'true');
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
    result = JSLINT(code, options);
    if (result) {
        console.log('JSLint does not report any problem.');
    } else {
        JSLINT.errors.forEach(function (error) {
            'use strict';
            if (error !== null) {
                console.log('At line', error.line,
                    'column', error.character,
                    ':', error.reason);
            }
        });
    }
} catch (e) {
    console.log(e);
}
