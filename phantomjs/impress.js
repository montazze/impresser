#! binary/phantomjs

var
	system = require('system'),
  Application = require('./lib/Application'),
  minimist = require('../node_modules/minimist'),
  Shell = require('./lib/Shell'),
  argv,
  options = {};

argv = minimist(system.args);

options.url = argv['_'][1];

if (argv['url-base64-encoded']) {
  try {
    options.url = window.atob(options.url);
  }
  catch(e) {
    Shell.exitWithError('Incorrect base64 formatted url', e);
  }
}

options.serverPort = argv['server-port'];
options.notices = argv['notices'];
options.warnings = argv['warnings'];

new Application(options).run();
