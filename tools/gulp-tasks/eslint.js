/* eslint-disable no-unneeded-ternary */
/* eslint-disable import/no-extraneous-dependencies */
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │  REQUIRE THIRDPARTY-MODULES DEPENDENCY.                                           │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const eslint = require('gulp-eslint');
const log = require('fancy-log');
const colors = require('ansi-colors');
const gulpIf = require('gulp-if');
const rename = require('gulp-rename');
const cache = require('gulp-cached');
const yargs = require('yargs');

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ REQUIRE NODEJS-MODULE DEPENDENCIES.                                               │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const fs = require('fs');
const path = require('path');

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ DESTRUCTURING DEPENDENCIES.                                                       │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const { red, yellow, green, blue, grey } = colors;
const { resolve } = path;
const { argv } = yargs;

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ DECLARATION OF CONSTANTS-VARIABLES.                                               │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const appDirectory = fs.realpathSync(process.cwd());

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ DECLARATION OF AUXILIARY FUNCTIONS.                                               │
//  └───────────────────────────────────────────────────────────────────────────────────┘

function pluralish(count, text) {
  return `${count} ${text}${count === 1 ? '' : 's'}`;
}

function isFixed(file) {
  const bolean =
    file.eslint != null &&
    file.eslint.fixed &&
    file.eslint.errorCount === file.eslint.fixableErrorCount &&
    file.eslint.warningCount === file.eslint.fixableWarningCount;
  return bolean;
}

function logQuickSummary(results) {
  const { errorCount, warningCount } = results;
  const resultsLen = results.length;
  const label = blue('[ Quick ESLint Summary ]');
  const labelFile = pluralish(resultsLen, 'File');
  const labelErr = pluralish(errorCount, 'Error');
  const labelWarn = pluralish(warningCount, 'Warning');
  log(label);
  log(grey('------------------------'));
  log(`● ${labelFile}`);
  log(`${errorCount > 0 ? red(`● ${labelErr}`) : green(`● ${labelErr}`)}`);
  log(`${warningCount > 0 ? yellow(`● ${labelWarn}`) : green(`● ${labelWarn}`)}`);
  log(grey('------------------------'));
}

function logIsFixed(result) {
  const {
    filePath,
    fixed,
    errorCount,
    warningCount,
    fixableErrorCount,
    fixableWarningCount,
  } = result;
  const boleanError = errorCount === fixableErrorCount;
  const boleanWarning = warningCount === fixableWarningCount;
  const boolean = boleanError && boleanWarning;
  log(` ▶ File Path:              ${filePath.replace(appDirectory, '')}`);
  log(` ▶ Is Fixed:               ${fixed}`);
  log(` ▶ Total Errors:           ${errorCount}`);
  log(` ▶ Total Warnings:         ${warningCount}`);
  log(` ▶ Total Fixable Error:    ${fixableErrorCount}`);
  log(` ▶ Total Fixable Warnings: ${fixableWarningCount}`);
  log(` ▶ It will be fix:         ${boolean}`);
  log(grey('----------------------------------------------------'));
}

//  ──[ EXPORT MODULE ]──────────────────────────────────────────────────────────────────
module.exports = {
  src: gulp => () => {
    return gulp
      .src(['!node_modules/**', 'src/**/*.js'])
      .pipe(eslint())
      .pipe(eslint.format('pretty')); // stdout
  },
  quick: gulp => () => {
    return gulp
      .src(['!node_modules/**', 'src/**/*.js'])
      .pipe(eslint())
      .pipe(eslint.format(results => logQuickSummary(results)));
  },
  fix: gulp => () => {
    const { dest } = gulp;
    return gulp
      .src(['!node_modules/**', 'src/**/*.js'])
      .pipe(eslint({ fix: true }))
      .pipe(eslint.format('pretty')) // if fixed, write the file to dest
      .pipe(eslint.result(result => logIsFixed(result)))
      .pipe(rename({ prefix: 'fix.', extname: '.js' }))
      .pipe(gulpIf(isFixed, dest('scripts/fix/')));
  },
  fail: gulp => () => {
    return gulp
      .src(['!node_modules/**', 'src/**/*.js'])
      .pipe(eslint())
      .pipe(eslint.formatEach('pretty')) // if fixed, write the file to dest
      .pipe(eslint.failOnError())
      .on('error', error => {
        log(`Stream Exiting With Error: ${error.message}`);
      });
  },
  file: gulp => () => {
    const target = argv.file ? argv.file : './build.script.js';
    const fixCode = argv.fix ? true : false;
    const { dest } = gulp;
    return gulp
      .src(target, { base: './' })
      .pipe(eslint({ fix: fixCode }))
      .pipe(eslint.format('pretty')) // if fixed, write the file to dest
      .pipe(eslint.result(result => logIsFixed(result)))
      .pipe(rename({ prefix: 'fix.', extname: '.js' }))
      .pipe(gulpIf(isFixed, dest('test/fixtures/')));
  },
  watch: gulp => () => {
    return gulp
      .src(['!node_modules/**', 'src/**/*.js'])
      .pipe(cache('eslint'))
      .pipe(eslint())
      .pipe(eslint.formatEach('pretty')) // stdout;
      .pipe(
        eslint.result(result => {
          if (result.warningCount > 0 || result.errorCount > 0) {
            delete cache.caches.eslint[resolve(result.filePath)]; // If a file has errors/warnings remove uncache it
          }
        }),
      );
  },
  report: gulp => () => {
    return gulp
      .src(['!node_modules/**', 'src/**/*.js'])
      .pipe(eslint())
      .pipe(eslint.format('pretty')) // stdout
      .pipe(eslint.format('html', fs.createWriteStream('./reports/eslint/report.eslint.html')));
  },
};
