/*global system: true, console: true, JSHINT: true */
var fname, settings, options, code, result;

settings = settings || {};

function help() {
    'use strict';
    var opt, str;
    console.log('Usage:');
    console.log('    jshint [options] filename');
    console.log();
    console.log('General options:');
    console.log('    --help           Show this help screen');
    console.log('    --version        Display JSHint edition');
    console.log();
    console.log('JSHint options (see http://jshint.com/index.html#docs):');
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
    console.log('Example use of JSHint options:');
    console.log('   --white=true --rhino=true --maxerr=42');
    console.log();
    console.log('which would enforce whitespace rules and define Rhino');
    console.log('environment globals and stop after encountering 42 errors.');
    console.log();
    console.log('For more information about JSHint, go to http://jshint.com.');
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

            if (option === 'version') {
                console.log('JSHint edition', JSHINT.edition);
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
                console.log('Run jshint --help to list all possible options.');
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
    result = JSHINT(code, options);
    if (result) {
        console.log('JSHint does not report any problem.');
    } else {
        JSHINT.errors.forEach(function (error) {
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
