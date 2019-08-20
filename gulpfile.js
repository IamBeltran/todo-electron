/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ REQUIRE THIRDPARTY-MODULES DEPENDENCY.                                            │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const gulp = require('gulp');
const cache = require('gulp-cached');

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ REQUIRE NODEJS-MODULE DEPENDENCIES.                                               │
//  └───────────────────────────────────────────────────────────────────────────────────┘

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ REQUIRE MY-MODULES DEPENDENCIES.                                                  │
//  └───────────────────────────────────────────────────────────────────────────────────┘

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ DESTRUCTURING DEPENDENCIES.                                                       │
//  └───────────────────────────────────────────────────────────────────────────────────┘

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ DECLARATION OF CONSTANTS.                                                         │
//  └───────────────────────────────────────────────────────────────────────────────────┘

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ DECLARATION OF AUXILIARY FUNCTIONS.                                               │
//  └───────────────────────────────────────────────────────────────────────────────────┘
/**
 * @name          loadTask
 * @description   Function for load gulp task
 * @param         {string} fileName
 * @param         {string} taskName
 * @returns       {function} A gulp task
 */
function loadTask(fileName, taskName) {
  const taskModule = require(`./tools/gulp-tasks/${fileName}`);
  const task = taskName ? taskModule[taskName] : taskModule;
  return task(gulp);
}

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ SET GULP-TASKS                                                                    │
//  └───────────────────────────────────────────────────────────────────────────────────┘

//  ──[ DEFAULT TASKS ]──────────────────────────────────────────────────────────────────

// ▶ TASK: gulp default
gulp.task('default', loadTask('default'));

//  ──[ ESLINT TASKS ]───────────────────────────────────────────────────────────────────

// ▶ TASK: gulp eslint:src
gulp.task('eslint:src', loadTask('eslint', 'src'));

// ▶ TASK: gulp quick:eslint
gulp.task('quick:eslint', loadTask('eslint', 'quick'));

// ▶ TASK: gulp eslint:fix
gulp.task('eslint:fix', loadTask('eslint', 'fix'));

// ▶ TASK: gulp eslint:fail
gulp.task('eslint:fail', loadTask('eslint', 'fail'));

// ▶ TASK: gulp eslint:file --file ./src/index.js --fix
gulp.task('eslint:file', loadTask('eslint', 'file'));

// ▶ TASK: gulp watch
gulp.task('watch', loadTask('eslint', 'watch'));

// ▶ TASK: gulp eslint:watch
gulp.task('eslint:watch', () => {
  return gulp.watch(['src/**/*.js'], { ignoreInitial: false }, gulp.series('watch'), event => {
    if (event.type === 'deleted' && cache.caches.eslint) {
      delete cache.caches.eslint[event.path]; // remove deleted files from cache
    }
  });
});

// ▶ TASK: gulp eslint:report
gulp.task('eslint:report', loadTask('eslint', 'report'));

//  ──[ UNIT-TEST TASKS ]────────────────────────────────────────────────────────────────

// ▶ TASK: gulp test:simple
gulp.task('test:simple', loadTask('mocha', 'simple'));

// ▶ TASK: gulp test:report
gulp.task('test:report', loadTask('mocha', 'report'));
