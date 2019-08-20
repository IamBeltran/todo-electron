/* eslint-disable no-unused-vars */
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ REQUIRE THIRDPARTY-MODULES DEPENDENCY.                                            │
//  └───────────────────────────────────────────────────────────────────────────────────┘

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ REQUIRE NODEJS-MODULE DEPENDENCIES.                                               │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const path = require('path');
const fs = require('fs');

//  ──[ UTILS.  ]───────────────────────────────────────────────────────────────────────
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ REQUIRE MY-MODULES DEPENDENCIES.                                                  │
//  └───────────────────────────────────────────────────────────────────────────────────┘

//  ──[ PATH MODULES.  ]────────────────────────────────────────────────────────────────
const utils = resolveApp('tools/utils');

//  ──[ REQUIRE MODULES.  ]─────────────────────────────────────────────────────────────
const util = require(utils);

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ DESTRUCTURING DEPENDENCIES.                                                       │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const {
  devMiddleware: { showError, showLabel, showData, Show },
} = util;

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ DECLARATION OF CONSTANTS-VARIABLES.                                               │
//  └───────────────────────────────────────────────────────────────────────────────────┘

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ DECLARATION OF AUXILIARY FUNCTIONS.                                               │
//  └───────────────────────────────────────────────────────────────────────────────────┘

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ BUILD TEST.                                                                       │
//  └───────────────────────────────────────────────────────────────────────────────────┘

// » MODULES THIRDPARTY-MODULES DEPENDENCY

// » MODULES NODEJS-MODULE DEPENDENCIES

// » REQUIRE MY-MODULES DEPENDENCIES

// » DESTRUCTURING DEPENDENCIES

// » DECLARATION OF TEST CONSTANTS-VARIABLES

// » DECLARATION OF TEST FUNCTIONS

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ START TESTING.                                                                    │
//  └───────────────────────────────────────────────────────────────────────────────────┘
(async () => {
  const $show = new Show();
  try {
    // ▶ RUN TEST
    // ▶ ────────────────────────────────────────────────────────────────────────────────

    // » PROCESS - START TESTING
    await $show.process('START TESTING');
  } catch (error) {
    showError(error, 'IIFE CATCH');
  } finally {
    // » PROCESS - END TESTING
    $show.process('END TESTING');
  }
})();
