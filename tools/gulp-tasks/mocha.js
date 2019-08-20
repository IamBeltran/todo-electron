/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ REQUIRE THIRDPARTY-MODULES DEPENDENCY.                                            │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const mocha = require('gulp-mocha');
const log = require('fancy-log');
const colors = require('ansi-colors');

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ REQUIRE NODEJS-MODULE DEPENDENCIES.                                               │
//  └───────────────────────────────────────────────────────────────────────────────────┘
// const fs = require('fs');
// const path = require('path');

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ REQUIRE MY-MODULES DEPENDENCIES.                                                  │
//  └───────────────────────────────────────────────────────────────────────────────────┘

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ DESTRUCTURING DEPENDENCIES.                                                       │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const { red } = colors;

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ DECLARATION OF CONSTANTS-VARIABLES.                                               │
//  └───────────────────────────────────────────────────────────────────────────────────┘

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ DECLARATION OF AUXILIARY FUNCTIONS.                                               │
//  └───────────────────────────────────────────────────────────────────────────────────┘

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ SET MODULE - [NAME-MODULE].                                                       │
//  └───────────────────────────────────────────────────────────────────────────────────┘

//  ──[ EXPORT MODULE ]──────────────────────────────────────────────────────────────────
module.exports = {
  simple: gulp => () => {
    return gulp
      .src(['!node_modules/**', 'test/specs/spec.*.js'])
      .pipe(mocha({ reporter: 'spec', exit: true }))
      .on('error', error => {
        log(`Error on test`);
        log(`Message: ${red(`${error.message}`)}`);
      });
  },
  report: gulp => () => {
    return gulp
      .src(['!node_modules/**', 'test/specs/spec.*.js'])
      .pipe(
        mocha({
          reporter: 'mochawesome',
          reporterOptions: {
            reportDir: './reports/mocha/mochawesome/',
            reportFilename: 'report',
            quiet: true,
          },
        }),
      )
      .on('error', error => {
        log(`Error on test`);
        log(`Message: ${red(`${error.message}`)}`);
      });
  },
};
