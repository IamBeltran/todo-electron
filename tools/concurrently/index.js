//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ REQUIRE THIRDPARTY DEPENDENCIES MODULES.                                          │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const concurrently = require('concurrently');

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ REQUIRE NODEJS DEPENDENCIES MODULE.                                               │
//  └───────────────────────────────────────────────────────────────────────────────────┘

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ REQUIRE MY DEPENDENCIES MODULES.                                                  │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const tasks = require('./tasks');
const middleware = require('./middleware');

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ DESTRUCTURING DEPENDENCIES.                                                       │
//  └───────────────────────────────────────────────────────────────────────────────────┘

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ DECLARATION OF CONSTANTS-VARIABLES.                                               │
//  └───────────────────────────────────────────────────────────────────────────────────┘

//  ──[ OPTIONS FOR CONCURRENTLY.  ]─────────────────────────────────────────────────────
const options = {
  prefix: 'name',
  prefixLength: 10,
  killOthers: ['failure', 'success'],
  successCondition: 'last',
  restartDelay: 5000,
  restartTries: 0,
};

//  ──[ NODE TASK. ]─────────────────────────────────────────────────────────────────────
const hasEnv = process.env.TASK;
const taskName = process.env.TASK || 'default';

//  ──[ CHOSEN TASK.  ]──────────────────────────────────────────────────────────────────
const chosenTask = tasks[taskName];

const through = hasEnv ? `ENVIRONMENT VARIABLES` : 'SCRIPT';

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ DECLARATION OF AUXILIARY FUNCTIONS.                                               │
//  └───────────────────────────────────────────────────────────────────────────────────┘

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ SET MAIN MODULE - CONCURRENTLY.                                                   │
//  └───────────────────────────────────────────────────────────────────────────────────┘
/**
 * NOTE : SET TASK
 * *      set environment variables task in package.json for run concurrently script
 * *      "concurrently": "cross-env TASK=TEST && nodemon ./concurrently/index.js",
 * *      or run default task
 * *      "concurrently": "nodemon ./concurrently/index.js",
 */
concurrently(chosenTask, options).then(
  () => {
    middleware.success({ through, taskName });
  },
  () => {
    middleware.error({ through, taskName });
  },
);
