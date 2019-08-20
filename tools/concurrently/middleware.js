/* eslint-disable no-console */
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ REQUIRE THIRDPARTY DEPENDENCIES MODULES.                                          │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const colors = require('ansi-colors');

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ REQUIRE NODEJS DEPENDENCIES MODULE.                                               │
//  └───────────────────────────────────────────────────────────────────────────────────┘

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ REQUIRE MY DEPENDENCIES MODULES.                                                  │
//  └───────────────────────────────────────────────────────────────────────────────────┘

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ DESTRUCTURING DEPENDENCIES.                                                       │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const { red, green, gray } = colors;

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ DECLARATION OF CONSTANTS-VARIABLES.                                               │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const checkX = red('[✘]');
const checkV = green('[✓]');
const error = red;
const success = green;
const line = gray('-----------------------------------------------------');

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ DECLARATION OF AUXILIARY FUNCTIONS.                                               │
//  └───────────────────────────────────────────────────────────────────────────────────┘

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ SET MAIN MODULE - MIDDLEWARE.                                                     │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const middleware = {
  error: ({ through, taskName }) => {
    console.log(`${`${line}`}`);
    console.log(`${error(`● DO NOT COMPLETE THE TASKS o(*_*)o`)}`);
    console.log(`${`${line}`}`);
    console.log(`${error(`● TASK: ${taskName}`)}`);
    console.log(`${error(`● FAILURE: ${checkX}`)}`);
    console.log(`${error(`● EXECUTION OF CONCURRENTLY BY: ${through}`)}`);
    console.log(`${`${line}`}`);
  },
  success: ({ through, taskName }) => {
    console.log(`${`${line}`}`);
    console.log(`${success(`● COMPLETE THE TASKS o(^-^)o`)}`);
    console.log(`${`${line}`}`);
    console.log(`${success(`● TASK: ${taskName}`)}`);
    console.log(`${success(`● SUCCESS: ${checkV}`)}`);
    console.log(`${success(`● EXECUTION OF CONCURRENTLY BY: ${through}`)}`);
    console.log(`${line}`);
  },
};

//  ──[ EXPORT MODULE ]──────────────────────────────────────────────────────────────────
module.exports = middleware;
